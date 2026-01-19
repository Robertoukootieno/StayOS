import { Span } from '@opentelemetry/api';
export declare class Tracer {
    private serviceName;
    constructor(serviceName: string);
    startSpan(name: string): Span;
    executeInSpan<T>(spanName: string, fn: (span: Span) => Promise<T>): Promise<T>;
}
//# sourceMappingURL=Tracer.d.ts.map