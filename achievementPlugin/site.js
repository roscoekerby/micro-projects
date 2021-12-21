// Achievement "Singleton": Revealing module pattern
Achievements = function()
{
	//Private object "achievementsObj" stores all achievements
	var achievementsObj = {},
		_localStorageKey,
	
	initialise = function(localStorageKey)
	{
		// Saves localStorage key internally
		_localStorageKey = localStorageKey;
	
		// Loads achievements from local storage if any
		if (window.localStorage)
			if ((typeof(window.localStorage[_localStorageKey]) != "undefined") && (window.localStorage[_localStorageKey] != null) && (window.localStorage[_localStorageKey] != "")) achievementsObj = JSON.parse(window.localStorage[_localStorageKey]);
	},
	
	addAchievement = function(text, description, icon)
	{
		if ((typeof(text) !== "string") || (text === "")) return;
	
		achievementsObj[text] = { active: false };
		if (typeof(description) !== "undefined") achievementsObj[text]["description"] = description;
		if (typeof(icon) !== "undefined") achievementsObj[text]["icon"] = icon;
	},	

	removeAchievement = function(text, description, icon)
	{
		delete achievementsObj[text];	
	},	

	getCount = function()
	{
		var count = 0;
		for (var i in achievementsObj) count++;
		alert(count);
		return count;
	},
	
	getUnlockedCount = function()
	{
		var count = 0;
		for (var i in achievementsObj)
		{
			if (achievementsObj[i]["active"]) count++;
		}
		alert(count);
		return count;
	},

	getLockedCount = function()
	{
		var count = 0;
		for (var i in achievementsObj)
		{
			if (!(achievementsObj[i]["active"])) count++;
		}
		alert(count);
		return count;
	},
	
	lockAllAchievements = function()
	{
		// Lock All Achievements
		for (var i in achievementsObj)
		{
			if (achievementsObj[i]["active"]) achievementsObj[i]["active"] = false;
		}
	},

	unlockAllAchievements = function()
	{
		// Unlock All Achievements
		for (var i in achievementsObj)
		{
			if (!(achievementsObj[i]["active"])) achievementsObj[i]["active"] = true;
		}
	},

	fullreset = function()
	{
		// Remove all achievements
		for (var i in achievementsObj)
		{
			// achievementsObj[i] = null;
			delete achievementsObj[i];	
		}
	},
	
	list = function()
	{
		// Locked achievements will be shown in a grey-ish color
		var result = "";
		for (var i in achievementsObj)
		{
			if (achievementsObj[i]["active"]) result += '<div class="achievement"><span class="title">' + i + '</span><br /><span class="details">' + achievementsObj[i]["description"] + '</span></div><br /><br />';
			else result += '<div class="achievement locked"><span class="title">' + i + '</span><br /><span class="details">' + achievementsObj[i]["description"] + '</span></div><br /><br />';
		}
		
		return result;
	},
	
	show = function(text)
	{
		if ((typeof(text) !== "string") || (text === "")) return;
	
		// If someone forget to add an achievement
		if (achievementsObj[text] === "undefined") addAchievement(text);
	
		if (!achievementsObj[text]["active"])
		{
			if ((typeof(achievementsObj[text].icon) != "undefined") && (achievementsObj[text].icon != "")) $('#achievement_box').css("background-image", "url(" + achievementsObj[text].icon + ")");
						
			$('#status.achievement #text').html(text);
			$('#status.achievement').show();
			$('#status.achievement').css({opacity: 0.0});			
			$('#status.achievement').animate({opacity: 1.0, bottom: '8px'}, 750);
			
			setTimeout(function() 
			{ 
			  $('#status.achievement').animate({opacity: 0.0, bottom: '-120px'}, 750, "linear", function() { $('#status.achievement').hide(); });
			}, 5000);
			
			achievementsObj[text].active = true;
		}
		
		if (window.localStorage) window.localStorage[_localStorageKey] = JSON.stringify(achievementsObj);
	};
	
	return {
		initialise: initialise,
		getCount: getCount,
		getUnlockedCount: getUnlockedCount,
		getLockedCount: getLockedCount,
		lockAllAchievements: lockAllAchievements,
		fullreset: fullreset,
		unlockAllAchievements: unlockAllAchievements,
		list: list,
		addAchievement: addAchievement,	
		removeAchievement: removeAchievement,	
		show: show
	};
}();

const addAchievement = () => {
	var achievement = document.getElementById("add").value;

	Achievements.addAchievement(achievement, achievement);
	Achievements.show(achievement, achievement);	
	}

const removeAchievement = () => {
	var achievement = document.getElementById("remove").value;
  
	Achievements.removeAchievement(achievement, achievement);	
  }
  

