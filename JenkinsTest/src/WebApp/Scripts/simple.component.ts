class SimpleControl {
    foo(): boolean {
        return true;
    }

    bar(): boolean {
        return false;
    }

    oze(a: string, b: string):string {
        return [a,b].join(" ");
    }

    rol(a: number, b: number): number {
        return a + b;
    }

    zed():void {
        throw new Error("Zed thrown an error");
    }
}