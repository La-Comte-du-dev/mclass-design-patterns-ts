abstract class AbstractClass {

    public mainAlgorithm(): void {
        this._baseOperation1();
        this.customOperation1();
        this._baseOperation2();
        this.customOperation2();
    }

    private _baseOperation1() {
        console.log("AbstractClass : i'm doing the big stuff");
    }
    private _baseOperation2() {
        console.log("AbstractClass : i'm doing the big stuff (2)");
    }

    protected abstract customOperation1(): void;
    protected abstract customOperation2(): void;

}

class ConcreteClass1 extends AbstractClass {

    protected customOperation1(): void {
        console.log("ConcreteClass1 : implemented operation1");       
    }
    protected customOperation2(): void {
        console.log("ConcreteClass1 : implemented operation2");

    }

}
class ConcreteClass2 extends AbstractClass {

    protected customOperation1(): void {
        console.log("ConcreteClass2 : implemented operation1");       
    }
    protected customOperation2(): void {
        console.log("ConcreteClass2 : implemented operation2");

    }

}

const cc1 = new ConcreteClass1();
const cc2 = new ConcreteClass2();
cc1.mainAlgorithm();
cc2.mainAlgorithm();