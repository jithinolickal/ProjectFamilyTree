import React from 'react';
import HomeImage from '../images/biblebook2.jpg';
import mother from '../images/mother.jpg';
import ImageGrid from './ImageGrid'

class HomeBody extends React.Component{
    render(){
        return(
            <div className="bodyDiv">
                <img src={HomeImage} className="homeImageStyle"/>
                <div className="homeText">
                    <h2>Olickal Family</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="container">
                    <img src={mother} alt="Avatar" style={{width:"90px"}}/>
                    <p><span>St. Mother Teresa</span></p>
                    <p><i>“Whatever you do for your family, your children, your husband, your wife, you do for God.  All we do, our prayers, our work, our suffering, is for Jesus.”</i></p>
                </div>
                <div className="galleryNews">
                    <div style={{width:"60%"}}>
                        <ImageGrid/>
                    </div>
                    <div className="newsUpdates">
                        <h3>News & Updates</h3>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomeBody;