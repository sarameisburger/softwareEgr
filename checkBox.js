/**
 * checkBox.js

 *
 * this file contains a function to set the limit of the number of checkboxes on the page
 * no more than two boxes should be able to be selected, as that would throw off our query.
 *
 * based on group C1's code, found here
 * https://github.com/trowbrid16/CS-441-Project
 *

 *
 * this file contains a function to set the limit of the number of checkboxes on the page
 * no more than two boxes should be able to be selected, as that would throw off our query.
 *
 * based on group C1's code, found here
 * https://github.com/trowbrid16/CS-441-Project
 *

 */

function checkBoxLimit(){
	//retrieve all boxes from the html page
	var boxList = document.getElementsByClassName("cbox");

	//make sure only 2 are checked
	var counter = 0;
	for (var i = 0; i < boxList.length; i++)
	{
		//keep a count of the number of checked boxes
		if(boxList[i].checked)
		{
			counter++;
		}
	}

	//make sure that unchecking the 2nd box will enable the rest of the buttons
	var disable;
	if(counter >= 2)
	{
		//disable all other boxes
		disable = true;
	} else {
		disable = false;
	}


	for (var j = 0; j < boxList.length; j++)
	{
		//disable/enable all boxes not checked
		if(!boxList[j].checked)
		{
			//if 2 boxes, disable, if <2 boxes, enable
			boxList[j].disabled = disable;
		}
	}

	//redraw the bar graph with this information in mind.
	drawChart();
}
