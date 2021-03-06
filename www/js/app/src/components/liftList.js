/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift', 'components/lift'], function($, React, monlift, Lift){
	
	return{
	LiftList : React.createClass({displayName:'LiftList', 
		render: function(){
			
			console.log("les lift sont : "+ML. getUserCars());
							
			return (
					<div className="control-group">
						<div className="controls">
							<div className = "centered non-vertical-centered">
							<h5> Lifts Disponibles </h5>
						</div>	
							<ul className="table-view">
							{	
								this.props.lifts.map(function(lift, i){
								return <Lift  image = "img/car2.png" date = {lift.date} depart = {lift.from} arrivee = {lift.to} placesdisponible = {lift.availablePlace} prix = {lift.price +" $"}  driver = {lift.driver.fullname}  infosVoiture = {lift.car.name + " " +lift.car.description}/>
								})
							}
						</ul>
					</div>
				</div>
        			
			);
		}
	})
	
	}
	
})// JavaScript Document