fetch ("https://api.coinlore.com/api/tickers/?start=0&limit=10")
    .then((res) => { return res.json()})
    .then((data) => {
        let htmlCode = ``;
        data.data.forEach(coin => {
            var { name, symbol, price_usd, tsupply} = coin
            htmlCode =
             htmlCode +
            `<table>
                <tbody>
                    <tr>
                        <td data-label="💰 Coin">${name}</td>
                        <td data-label="📄 Code">${symbol}</td>
                        <td data-label="🤑 Price">${price_usd}</td>
                        <td data-label="📉 Total Supply">${tsupply}</td>
                    </tr>
                </tbody>
            </table>`;
            const coinList = document.querySelector(".all-coins");
            coinList.innerHTML = htmlCode;
        });
    })

    fetch ("https://api.coinlore.com/api/tickers/?start=10&limit=10")
        .then((res) => { return res.json()})
        .then((data) => {
            let htmlCode = ``;
            data.data.forEach(coin => {
                var { name, symbol, price_usd, tsupply} = coin
                htmlCode =
                 htmlCode +
                `<table>
                    <tbody>
                        <tr>
                            <td data-label="💰 Coin">${name}</td>
                            <td data-label="📄 Code">${symbol}</td>
                            <td data-label="🤑 Price">${price_usd}</td>
                            <td data-label="📉 Total Supply">${tsupply}</td>
                        </tr>
                    </tbody>
                </table>`;
                const coinList = document.getElementById('two');
                coinList.innerHTML = htmlCode;
            });
        })

        fetch ("https://api.coinlore.com/api/tickers/?start=20&limit=10")
        .then((res) => { return res.json()})
        .then((data) => {
            let htmlCode = ``;
            data.data.forEach(coin => {
                var { name, symbol, price_usd, tsupply} = coin
                htmlCode =
                 htmlCode +
                `<table>
                    <tbody>
                        <tr>
                            <td data-label="💰 Coin">${name}</td>
                            <td data-label="📄 Code">${symbol}</td>
                            <td data-label="🤑 Price">${price_usd}</td>
                            <td data-label="📉 Total Supply">${tsupply}</td>
                        </tr>
                    </tbody>
                </table>`;
                const coinList = document.getElementById('three');
                coinList.innerHTML = htmlCode;
            });
        })

        fetch ("https://api.coinlore.com/api/tickers/?start=30&limit=10")
        .then((res) => { return res.json()})
        .then((data) => {
            let htmlCode = ``;
            data.data.forEach(coin => {
                var { name, symbol, price_usd, tsupply} = coin
                htmlCode =
                 htmlCode +
                `<table>
                    <tbody>
                        <tr>
                            <td data-label="💰 Coin">${name}</td>
                            <td data-label="📄 Code">${symbol}</td>
                            <td data-label="🤑 Price">${price_usd}</td>
                            <td data-label="📉 Total Supply">${tsupply}</td>
                        </tr>
                    </tbody>
                </table>`;
                const coinList = document.getElementById('four');
                coinList.innerHTML = htmlCode;
            });
        })

        fetch ("https://api.coinlore.com/api/tickers/?start=40&limit=10")
        .then((res) => { return res.json()})
        .then((data) => {
            let htmlCode = ``;
            data.data.forEach(coin => {
                var { name, symbol, price_usd, tsupply} = coin
                htmlCode =
                 htmlCode +
                `<table>
                    <tbody>
                        <tr>
                            <td data-label="💰 Coin">${name}</td>
                            <td data-label="📄 Code">${symbol}</td>
                            <td data-label="🤑 Price">${price_usd}</td>
                            <td data-label="📉 Total Supply">${tsupply}</td>
                        </tr>
                    </tbody>
                </table>`;
                const coinList = document.getElementById('five');
                coinList.innerHTML = htmlCode;
            });
        })