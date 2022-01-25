import React from 'react';

export default  function Home() {
  return (
    <div>
        <div id="banner-div">
            <img src="https://www.nestle.com/sites/default/files/plant-based-bacon-cheeseburger-feed.jpg" id="banner-img" />
            
            <button id="banner-btn">Order Now</button>
        </div>

        <div id="press">
            <p id="pr-text">
                Our family business has served the community for decades striving to prepare and serve the best dishes in the neighborhood. 
                With fresh ingredients, secret recipes, and excellent cooks, Burger Express has received many awards and great reviews from renowned critics.
            </p>

        </div>

        <div id="loc-div">
            <table id="loc-tbl">
                <tr>
                    <td id="loc-img-td">
                        <img src="https://www.creativefabrica.com/wp-content/uploads/2020/05/01/Fast-food-restaurant-building-vector-Graphics-4002365-1-1-580x386.jpg" id="loc-img" />
                    </td>
                    <td>
                        <p> 123 Main St.<br />
                            Brooklyn, NY <br />
                            11210 <br />
                            (555) 123 - 4321
                        </p>
                    </td>
                </tr>
            </table>
        </div>



    </div>
  );
}


