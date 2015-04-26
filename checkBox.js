function checkBoxLimit(){
	//retrieve all boxes
	var boxList = document.getElementsByClassName("cbox");

	//make sure only 2 are checked
	var counter = 0;
	for (var i = 0; i < boxList.length; i++)
	{//keep a count of the number of checked boxes
		if(boxList[i].checked)
		{
			counter++;
		}
	}

	//make sure that unchecking the 2nd box will enable the rest of the buttons
	var disable;
	if(counter >= 2)
	{//disable all other boxes
		disable = true;
	} else {
		disable = false;
	}


	for (var j = 0; j < boxList.length; j++)
	{//disable/enable all boxes not checked
		if(!boxList[j].checked)
		{//if 2 boxes, disable, if <2 boxes, enable
			boxList[j].disabled = disable;
		}
	}

	//redraw the bar graph
	drawChart();
}
