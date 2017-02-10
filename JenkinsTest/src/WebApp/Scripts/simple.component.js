var SimpleControl = (function () {
    function SimpleControl() {
    }
    SimpleControl.prototype.foo = function () {
        return true;
    };
    SimpleControl.prototype.bar = function () {
        return false;
    };
    SimpleControl.prototype.oze = function (a, b) {
        return [a, b].join(" ");
    };
    SimpleControl.prototype.rol = function (a, b) {
        return a + b;
    };
    SimpleControl.prototype.zed = function () {
        throw new Error("Zed thrown an error");
    };
    return SimpleControl;
}());
