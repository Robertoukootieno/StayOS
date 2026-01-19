"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(id, createdAt, updatedAt) {
        this._id = id;
        this._createdAt = createdAt || new Date();
        this._updatedAt = updatedAt || new Date();
    }
    get id() {
        return this._id;
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    touch() {
        this._updatedAt = new Date();
    }
    equals(entity) {
        if (entity === null || entity === undefined) {
            return false;
        }
        if (this === entity) {
            return true;
        }
        if (!(entity instanceof Entity)) {
            return false;
        }
        return this._id === entity._id;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map