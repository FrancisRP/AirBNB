import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from "./SearchResult"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays · 15 December to 30 December · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />
             <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="£40 / night"
                total="£157 total"
            />

        </div>
    )
}

export default SearchPage
