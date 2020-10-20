
class SampleButton {
    // コンストラクター
    constructor(_button) {
        // ボタンのクリックイベントを設定する
        _button.addEventListener('click', this.click);
    }

    // クリックイベントで実行する処理
    click() {
        if (!this.classList.contains('sampleButton-ng')) {
            //クラスの追加
            this.classList.add('sampleButton-ng');
            //テキストの書き換え
            this.textContent = "NG";
        } else {
            //クラスの削除
            this.classList.remove('sampleButton-ng');
            //テキストの書き換え
            this.textContent = "OK";
        }
    }
}

// ボタンインスタンスを作成する。
//指定したidにSampleButtonを適用している
let samplebutton = new SampleButton(document.getElementById('samplebutton'));



