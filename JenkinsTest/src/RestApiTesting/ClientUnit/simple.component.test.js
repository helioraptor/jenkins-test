/// <reference path="jasmine.d.ts"/>
/// <reference path="../../WebApp/Scripts/simple.component.ts"/>
"use strict";
describe("NavMenuComponent", function () {
    var control = new SimpleControl();
    it("foos", function () {
        expect(control.foo()).toBe(true);
    });
    it("bars", function () {
        expect(control.bar()).toBe(false);
    });
    it("ozes", function () {
        var a = "test";
        var b = "me";
        expect(control.oze(a, b)).toBe("test me");
    });
    it("rols", function () {
        var a = 5;
        var b = 12;
        expect(control.rol(a, b)).toBe(17);
    });
    it("zeds", function () {
        expect(control.zed).toThrowError();
    });
});
