/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift', 'components/liftList'], function($, React, monlift, liftList){
	
	var liftLists = liftList.LiftList;
	return{
	LiftListcomponent : React.createClass({displayName:'LiftList', 
		render: function(){
			
			var lifts= ML.getlifts();
			
						
			return (
						<div className = "vertical-centered-container" id = "listLiftcomponent" >
							<liftLists lifts = {lifts}/> 
        				</div>
			);
		}
	})
	
	}
	
})// JavaScript Document
