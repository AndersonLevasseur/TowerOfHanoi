module.exports = class Disk {
    constructor(size) {
        // TODO: validation
        this.size = size;
    }

    toString() {
        return this.size;
    }
}