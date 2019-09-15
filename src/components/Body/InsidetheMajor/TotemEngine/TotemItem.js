import React from 'react';

export default ({  totem })=> <button className="totem-btn"  >
		<span >
			<img className="mzirochippic" src={totem.ekifananyi} alt="ekifananyikyomuziro"  />
			<h4 >{ totem.omuziro }</h4>
		</span>
	</button>

