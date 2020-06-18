import React from 'react';

const MethodList = (props) => {
    let methodPanel = null;
    if(props.method !== null && typeof props.method === 'object') {
        let mash_tempJSX = [];
        let fermentationJSX = [];
        let twistJSX = '';
        if(props.method.mash_temp.length >= 1) {
            let mash_tempItem = null;
            for (let mash_tempItemObject of props.method.mash_temp) {
                mash_tempItem = <li>{
                    `${mash_tempItemObject.temp.value} ${mash_tempItemObject.temp.unit} ` +
                    `duration of ${mash_tempItemObject.duration}.`
                }</li>
                mash_tempJSX.push(mash_tempItem);
            }
        }
        
        if(props.method.fermentation.length >= 1) {
            let fermentationItem = null;
            for(let fermentationItemObject of props.method.fermentation) {
                fermentationItem = <li>{
                    `The fermentation temp for this is: ${fermentationItemObject.temp.value} ${fermentationItemObject.temp.unit}.`
                }</li>
                fermentationJSX.push(fermentationItem);
                console.log(fermentationItem)
            }
        }

        twistJSX = <li>{props.method.twist}.</li>

        methodPanel = <div className='methodStyle'>
            <h2>The Method</h2>
            <h3>Mash Temp</h3>
            <p>{mash_tempJSX}</p>
            <h3>The Fermentation</h3>
            <p>{fermentationJSX}</p>
            <h3>The Twist</h3>
            <p>{twistJSX}</p>
        </div>
    }
    return methodPanel;
}

const IngredientsList = (props) => {
    let ingredientPanel = null;
    if(props.ingredients !== null && typeof props.ingredients === 'object') {
        let hopsJSX = [];
        let maltJSX = [];
        let yeastJSX = '';
        if(props.ingredients.hops.length >= 1) {
            let hopItem = null;
            for (let hopItemObject of props.ingredients.hops) {
                hopItem = <li>{
                    `${hopItemObject.name} (${hopItemObject.attribute} hops) ` +
                    `${hopItemObject.amount.value} ${hopItemObject.amount.unit} ` +
                    `added at the ${hopItemObject.add}.`
                }</li>
                hopsJSX.push(hopItem);
            }
        }
        
        if(props.ingredients.malt.length >= 1) {
            let maltItem = null;
            for(let maltItemObject of props.ingredients.malt) {
                maltItem = <li>{
                    `${maltItemObject.name}, ${maltItemObject.amount.value} ${maltItemObject.amount.unit}.`
                }</li>
                maltJSX.push(maltItem);
            }
        }

        yeastJSX = <li>{props.ingredients.yeast}.</li>

        ingredientPanel = <div className='ingredientsStyle'>
            <h2>The Ingredients</h2>
            <h3>The Hops</h3>
            <ul>{hopsJSX}</ul>
            <h3>The Malt</h3>
            <ul>{maltJSX}</ul>
            <h3>The Yeast</h3>
            <ul>{yeastJSX}</ul>
        </div>
    }
    return ingredientPanel;
}

const VolumeList = (props) => {
    let volumeJSX = null;
    if(props.volume !== null && typeof props.volume === 'object') {
        volumeJSX = <p>The volume for this beer is {props.volume.value} {props.volume.unit}.</p>
    }
    return volumeJSX;
}

const BoilVolumeList = (props) => {
    let boilVolumeJSX = null;
    if(props.boil_volume !== null && typeof props.boil_volume === 'object') {
        boilVolumeJSX = <p>The boil volume for this beer is {props.boil_volume.value} {props.boil_volume.unit}.</p>
    }
    return boilVolumeJSX;
}

const FoodParingList = (props) => {
    let foodPairing = '';
    let foodPairingJSX = null;
    if(props.food_pairing !== null) {
        foodPairing = props.food_pairing.join(", ");
        foodPairingJSX = <p>{`Here are some good food pairings with this beer: ${foodPairing}`}</p>
    }
    return foodPairingJSX
}

const BeerPanel = (props) => {
    if(props.beer !== null) {
    let topLevelListItems = [];
    for (let [key, value] of Object.entries(props.beer)) {
        if (typeof value !== 'object') {
            topLevelListItems.push(<li>{key}: {value} </li>)
        }
    }
    return <div>
            <ul>{topLevelListItems}</ul>
            <VolumeList volume={props.beer.volume} />
            <BoilVolumeList boil_volume={props.beer.boil_volume} />
            <FoodParingList food_pairing={props.beer.food_pairing} />
            <MethodList method={props.beer.method} />
            <IngredientsList ingredients={props.beer.ingredients} />

            <hr />
           </div>;
    }
}


export default BeerPanel;