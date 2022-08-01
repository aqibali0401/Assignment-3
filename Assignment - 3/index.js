const axios = require('axios');
const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');


// let x;
// axios.get('https://coronavirus.m.pipedream.net/')
//     .then((response) => {
//         // console.log(response.data);
//         let data = response.data;
//         console.log(data);
//         x = data;
//     })
//     .catch(console.error)


//     console.log("my x is ", x);

// async function getJSONAsync(){
//   let json = await axios.get('https://coronavirus.m.pipedream.net/')
//   console.log('after the call to service');
//   return json;
// }

// (async()=>{
//    let abc = await getJSONAsync();
//    console.log('>>>>>>>>>>> abc', abc.data);
// })();

app.get('/getData', async (req, res) => {
  
    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')

        // const res = data.map(() => {

        // })

        res.status(200).send({ data })
    }
    catch (error) {
        res.status(500).send({ error })
    }

})




app.get('/getAllCountryName', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;

        var ans = jsonData.map((obj) => {
            return obj.Country_Region;
        })

        let finalAns = [...new Set(ans)];
        res.status(200).send({ finalAns })
    }
    catch (error) {
        res.status(500).send({ error })
    }

});

app.get('/countryWiseData', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;
        var name = req.query.name;
        console.log(name);

        var ans = jsonData.filter((obj) => {
            return obj.Country_Region === name
        })

        res.status(200).send(ans)

    }
    catch (err) {
        res.status(500).send({ err })
    }

});

// request.params
app.get('/countryWiseData/:name', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;
        const { name } = req.params;
        console.log(name);

        var ans = jsonData.filter((obj) => {
            return obj.Country_Region === name
        })
        const { Country_Region, Last_Update } = ans[0];

        const finalAnss = [{ "Country_Region": ans[0].Country_Region }, { "Long_": ans[0].Long_ }, { "Confirmed": ans[0].Confirmed }, { "Deaths": ans[0].Deaths }];
        
        res.status(200).send(finalAnss);
    }
    catch (err) {
        res.status(500).send({ err })
    }

});


app.get('/allStateInCountry/:name', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;
        const { name } = req.params;
        console.log(name);

        var ans = jsonData.filter((obj) => {
            return obj.Country_Region === name
        })

        var stateList = ans.map((obj) => {
            return obj.Province_State
        })
        stateList = [...new Set(stateList)];
        console.log(stateList.length);
        res.status(200).send(stateList);
    }
    catch (err) {
        res.status(500).send({ err })
    }

});


app.get('/stateWiseData/:name', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;
        const { name } = req.params;
        console.log(name);

        var ans = jsonData.filter((obj) => {
            return obj.Province_State === name
        })
        const { Confirmed, Deaths, Combined_Key } = ans[0];
        const fans = [{ Confirmed, Deaths, Combined_Key }];
        res.status(200).send(fans);
    }
    catch (err) {
        res.status(500).send({ err })
    }

});

app.get('/dethLessThan/:num', async (req, res) => {
    try {
        const { data } = await axios.get("https://coronavirus.m.pipedream.net/")
        const { rawData } = data;
        const { num } = req.params;

        console.log(num);
        const minDethArr = rawData.filter((obj) => {
           
            const x = parseInt(num);

            if ((obj.Deaths < x && obj.Deaths != 0)) {
                return obj;
            }

        })

        console.log(minDethArr.length);

        res.status(200).send(minDethArr);

    }
    catch (error) {
        res.status(500).send({ error })
    }

});


app.get('/maxDeathInCountry/:name', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;
        const { name } = req.params;
        console.log(name);

        var ans = jsonData.filter((obj) => {
            return obj.Country_Region === name;
        })

        let maxDeath = Number.NEGATIVE_INFINITY;
        console.log(maxDeath);
        let myObj = {};
        for (let i = 0; i < ans.length; i++) {
            if (ans[i].Deaths > maxDeath) {
                maxDeath = ans[i].Deaths;
                myObj = ans[i];
            }
        }

        const { Country_Region, Province_State, Deaths } = myObj;
        const maxDeathData = [{ "Country_Region": Country_Region, "Province_State": Province_State, "Deaths": Deaths }];

        res.status(200).send(maxDeathData);
    }
    catch (err) {
        res.status(500).send({ err })
    }

});


app.get('/mininumDeathInCountry/:name', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;
        const { name } = req.params;

        var ans = jsonData.filter((obj) => {
            return obj.Country_Region === name;
        })

        let minDeath = Infinity;
        console.log(minDeath);
        let myObj = {};
        for (let i = 0; i < ans.length; i++) {
            if (ans[i].Deaths < minDeath) {
                minDeath = ans[i].Deaths;
                myObj = ans[i];
            }
        }

        const { Country_Region, Province_State, Deaths } = myObj;
        const minDeathData = [{ "Country_Region": Country_Region, "Province_State": Province_State, "Deaths": Deaths }];

        res.status(200).send(minDeathData);
    }
    catch (err) {
        res.status(500).send({ err })
    }

});

app.get('/confirmedCasesInOrder/:name/:order', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;
        const { name } = req.params;
        const { order } = req.params;
    
        var ans = jsonData.filter((obj) => {
            return obj.Country_Region === name;
        })

        if (order == "Inc") {
            ans.sort((a, b) => {
                return a.Confirmed - b.Confirmed;
            });
        } else if (order == "Dec") {
            ans.sort((a, b) => {
                return b.Confirmed - a.Confirmed;
            });
        }

        res.status(200).send(ans);
    }
    catch (err) {
        res.status(500).send({ err })
    }

});

app.get('/totalDeathInCountry/:name', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;
        const { name } = req.params;
        console.log(name);

        var ans = jsonData.filter((obj) => {
            return obj.Country_Region === name;
        })

        let deathCount = 0;

        for (let i = 0; i < ans.length; i++) {
            const x = parseInt(ans[i].Deaths);
            deathCount += x;
            console.log(deathCount);
        }


        res.status(200).send({ deathCount });
    }
    catch (err) {
        res.status(500).send({ err })
    }

});

app.get('/totalConfirmedCasesInCountry/:name', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;
        const { name } = req.params;
        console.log(name);

        var ans = jsonData.filter((obj) => {
            return obj.Country_Region === name;
        })


        let confirmedCaseCount = 0;

        for (let i = 0; i < ans.length; i++) {
            const x = parseInt(ans[i].Confirmed);
            confirmedCaseCount += x;
            console.log(confirmedCaseCount);
        }


        res.status(200).send({ confirmedCaseCount });
    }
    catch (err) {
        res.status(500).send({ err })
    }

});

// combined API to get Confirmed cases or Death in a country

app.get('/totalConfirmedCasesAndDeathInCountry/:name/:deathOrConfirmCases', async (req, res) => {

    try {
        const { data } = await axios.get('https://coronavirus.m.pipedream.net/')
        let jsonData = data.rawData;
        const { name } = req.params;
        const { deathOrConfirmCases } = req.params;
        console.log(name);
        console.log(deathOrConfirmCases);

        var ans = jsonData.filter((obj) => {
            return obj.Country_Region === name;
        })
        // console.log(ans);

        if (deathOrConfirmCases == "D") {
            log("inside -> d")
            var deathCount = 0;
            for (let i = 0; i < ans.length; i++) {
                let x = parseInt(ans[i].Deaths);
                deathCount += x;
                console.log(deathCount);
            }
            res.status(200).send({ deathCount });
                        
        } else if (deathOrConfirmCases == "CC") {
            log("inside -> cc ")
            let confirmedCaseCount = 0;
            for (let i = 0; i < ans.length; i++) {
                let x = parseInt(ans[i].Confirmed);
                confirmedCaseCount += x;
                console.log(confirmedCaseCount);
            }
            res.status(200).send({ confirmedCaseCount });
        }
        res.status(200).send("Please enter correct parameter");
    }
    catch (err) {
        res.status(500).send({ err })
    }

});





app.listen(3000, () => {
    console.log("server started at port 3000");
})