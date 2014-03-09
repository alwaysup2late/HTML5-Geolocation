var GeoLocation = (function(){
	var _map = document.getElementById("map"),
		_info = document.getElementById("info"),
		_lat = document.getElementById("lat"),
		_lng = document.getElementById("lng"),
		_acc = document.getElementById("acc"),
		_msg = document.getElementById("message"),
		_width = window.innerWidth,
		_height = window.innerHeight,

	success = function(position) {
		_msg.innerHTML = "FOUND";

		var lat = position.coords.latitude,
			lng = position.coords.longitude,
			latlng = new google.maps.LatLng(lat, lng),
			config = {
				zoom: 15,
				center: latlng,
				mapTypeControl: false,
				disableDefaultUI: false,
				mapTypeId: google.maps.MapTypeId.HYBRID
			},
			map = new google.maps.Map(_map, config),
			marker = new google.maps.Marker({
				position: latlng,
				map: map,
				animation: google.maps.Animation.DROP,
				title: "You are here"
			});

		_map.style.width = _width + "px";
		_map.style.height = _height + "px";
		_lat.innerHTML = lat;
		_lng.innerHTML = lng;
		_acc.innerHTML = position.coords.accuracy;

		_map.style.display = "block";
		_info.style.display = "block";
	},

	error = function(error) {
		_msg.innerHTML = "DENIED";
		console.log(error.message);
	};

	setTimeout(function(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			console.log("NO GEOLOCATION SUPPORT");
		}
	}, 1);
})();