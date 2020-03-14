class Control {
    public readonly state: any
}

interface SelectableControl extends Control {
    select(): void
}

class Button extends Control implements SelectableControl {
    select(): void {
        console.log(`버튼 선택`)
    }
}

class TextBox extends Control {
    select(): void {
        console.log(`텍스트 박스 선택`)
    }
}

class Image1 implements SelectableControl {
    select(): void {
        console.log(`이미지 선택`)
    }

    state: any;
}

new Button().select()
new TextBox().select()
new Image1().select()