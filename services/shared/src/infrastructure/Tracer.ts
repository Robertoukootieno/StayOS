import { trace, Span, SpanStatusCode } from '@opentelemetry/api';

/**
 * Centralized tracer for distributed tracing
 * Uses OpenTelemetry for tracing across microservices
 */
export class Tracer {
  private serviceName: string;

  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }

  /**
   * Start a new span for tracing
   */
  startSpan(name: string): Span {
    const tracer = trace.getTracer(this.serviceName);
    return tracer.startSpan(name);
  }

  /**
   * Execute a function within a span
   */
  async executeInSpan<T>(
    spanName: string,
    fn: (span: Span) => Promise<T>
  ): Promise<T> {
    const span = this.startSpan(spanName);
    try {
      const result = await fn(span);
      span.setStatus({ code: SpanStatusCode.OK });
      return result;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error instanceof Error ? error.message : 'Unknown error',
      });
      span.recordException(error as Error);
      throw error;
    } finally {
      span.end();
    }
  }
}

