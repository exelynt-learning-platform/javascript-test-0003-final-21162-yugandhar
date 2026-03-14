class JavaScriptTest {

    static main() {

        const n = 6;

        for (let i = 1; i <= n; i++) {

            let line = "";

            for (let j = 1; j <= i; j++) {

                if ((i + j) % 2 === 0) {
                    line += "1 ";
                } else {
                    line += "0 ";
                }

            }

            console.log(line.trim());
        }
    }
}

JavaScriptTest.main();