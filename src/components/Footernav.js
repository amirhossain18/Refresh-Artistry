import React from 'react';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LoginIcon from '@mui/icons-material/Login';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import style from "./footernav.css"
const Footernav = () => {
    return (
     
             <div class="menu">
		<input type="radio" name="menu" id="one" />
		<input type="radio" name="menu" id="two"/>
		<input type="radio" name="menu" id="three"/>
		<input type="radio" name="menu" id="four"/>
    <input type="radio" name="menu" id="five"/>
		<div class="list">
			<div class="link-wrap">
				<label for="one">
					<i class="material-icons"> <HomeWorkIcon/></i>
					<span>Home</span>
				</label>
				<label for="two">
					<i class="material-icons"><MessageIcon/></i>
					<span>Chat</span>
				</label>
				<label for="three">
					<i class="material-icons"><SearchIcon/></i>
					<span>Search</span>
				</label>
				<label for="four">
					<i class="material-icons">< MenuIcon /></i>
					<span>Menu</span>
        </label>
          <label for="five">
					<i class="material-icons"><LoginIcon/> </i>
					<span>Account</span>
				</label>
			</div>
		</div>
</div>
       
    );
};

export default Footernav;