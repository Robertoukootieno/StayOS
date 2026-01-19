"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracer = void 0;
const api_1 = require("@opentelemetry/api");
class Tracer {
    constructor(serviceName) {
        this.serviceName = serviceName;
    }
    startSpan(name) {
        const tracer = api_1.trace.getTracer(this.serviceName);
        return tracer.startSpan(name);
    }
    async executeInSpan(spanName, fn) {
        const span = this.startSpan(spanName);
        try {
            const result = await fn(span);
            span.setStatus({ code: api_1.SpanStatusCode.OK });
            return result;
        }
        catch (error) {
            span.setStatus({
                code: api_1.SpanStatusCode.ERROR,
                message: error instanceof Error ? error.message : 'Unknown error',
            });
            span.recordException(error);
            throw error;
        }
        finally {
            span.end();
        }
    }
}
exports.Tracer = Tracer;
//# sourceMappingURL=Tracer.js.map