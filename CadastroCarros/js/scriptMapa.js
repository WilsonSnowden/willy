function initMap() 
	{    
		
		var lat_lng = {lat: -23.562723, lng : -46.6388021};     
		var map = new google.maps.Map(document.getElementById('map'), 
		{    
			zoom: 5,   
			minZoom: 5,
			maxZoom: 18,
			center: lat_lng,    
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			styles:
			[
				{
					"elementType": "geometry",
					"stylers": 
					[
						{
							"color": "#f5f5f5"
						}
					]
					},
				{
					"elementType": "geometry.fill",
					"stylers": 
					[
						{
							"color": "#faf7ef"
						}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": 
					[
						{
							"visibility": "off"
						}
					]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": 
					[
					  {
						"color": "#616161"
					  }
					]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": 
					[
					  {
						"color": "#f5f5f5"
					  }
					]
				},
				{
					"featureType": "administrative.country",
					"elementType": "geometry.stroke",
					"stylers":
					[
						{
							"color": "#7d7d7d"
						},
						{
							"weight": 1.5
						}
					]
				},
				{
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": 
					[
						{
							"color": "#bdbdbd"
						}
					]
				},
				{
					"featureType": "landscape.natural.terrain",
					"elementType": "labels.icon",
					"stylers": 
					[
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": 
					[
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": 
					[
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": 
					[
						{
							"color": "#e5e5e5"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry.fill",
					"stylers": 
					[
						{
							"color": "#c4eba4"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": 
					[
						{
							"color": "#9e9e9e"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": 
					[
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": 
					[
						{
							"color": "#8dc385"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.stroke",
					"stylers": 
					[
						{
							"color": "#7aa974"
						},
						{
						"weight": 2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": 
					[
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers":
					[
						{
							"color": "#dadada"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": 
					[
						{
							"color": "#4ca188"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": 
					[
						{
							"color": "#616161"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.fill",
					"stylers":
					[
						{
							"color": "#e7e9d2"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry.stroke",
					"stylers": 
					[
						{
							"color": "#cbd9ca"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers":
					[
						{
							"color": "#9e9e9e"
						}
					]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": 
					[
						{
							"color": "#e5e5e5"
						}
					]
				},
				{
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": 
					[
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": 
					[
						{
							"color": "#c9c9c9"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": 
					[
						{
							"color": "#92d7db"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": 
					[
						{
							"color": "#9e9e9e"
						}
					]
				}
			]
		});  
						
		
		var markers = [];
		var imageIpiranga = 
		{
			url:'css/imagens/ipiranga.png',
			size: new google.maps.Size(30,30),
			scaledSize: new google.maps.Size(30,30)
		};
		var imagePetrobas =
		{
			url:'css/imagens/br.png',
			size: new google.maps.Size(30,30),
			scaledSize: new google.maps.Size(30,30)
        };
        var imageShel = 
		{
			url:'css/imagens/shel.png',
			size: new google.maps.Size(30,30),
			scaledSize: new google.maps.Size(30,30)
		};
		
		var localizacaoPetrobas =
		[
			 {lat: -23.520111, lng: -46.627696},
			 {lat: -23.619955, lng: -46.674552},
			 {lat: -23.586314, lng: -46.693096},
			 {lat: -23.591931, lng: -46.606647},
			 {lat: -23.604718, lng: -46.670539},
			 {lat: -23.624665, lng: -46.734008},
			 {lat: -23.503944, lng: -46.622461},
			 {lat: -23.491243, lng: -46.618453},
			 {lat: -23.646219, lng: -46.708320},
			 {lat: -23.532899, lng: -46.462727},
			 {lat: -23.515129, lng: -46.688472},
			 {lat: -23.482322, lng: -46.622290},
			 {lat: -23.565567, lng: -46.569719},
			 {lat: -23.633830, lng: -46.690571},
			 {lat: -23.538997, lng: -46.718720},
			 {lat: -23.540839, lng: -46.717274},
			 {lat: -23.542284, lng: -46.726858},
			 {lat: -23.529419, lng: -46.656439},
			 {lat: -23.537912, lng: -46.489802},
			 {lat: -23.531009, lng: -46.660953},
			 {lat: -23.528193, lng: -46.724724},
			 {lat: -23.519207, lng: -46.674121},
			 {lat: -23.555189, lng: -46.645724},
			 {lat: -23.562160, lng: -46.641815},
			 {lat: -23.551084, lng: -46.638128},
			 {lat: -23.553661, lng: -46.637543},
			 {lat: -23.554347, lng: -46.644424},
			 {lat: -23.530666, lng: -46.600414},
			 {lat: -23.522489, lng: -46.643096},
			 {lat: -23.519652, lng: -46.656347},
			 {lat: -23.543732, lng: -46.620509},
			 {lat: -23.612724, lng: -46.678161},
			 {lat: -23.572166, lng: -46.722147},
			 {lat: -23.572166, lng: -46.722147},
			 {lat: -23.572883, lng: -46.711606},
			 {lat: -23.582105, lng: -46.712030},
			 {lat: -23.618562, lng: -46.672777},
			 {lat: -23.570402, lng: -46.711423},
			 {lat: -23.619868, lng: -46.674616},
			 {lat: -23.512444, lng: -46.545841},
			 {lat: -23.545153, lng: -46.545234},
			 {lat: -23.688574, lng: -46.701760},
			 {lat: -23.508836, lng: -46.652989},
			 {lat: -23.495448, lng: -46.661540},
			 {lat: -23.569967, lng: -46.648201},
			 {lat: -23.549932, lng: -46.629415},
			 {lat: -23.559064, lng: -46.669079},
			 {lat: -23.824785, lng: -46.734647},
			 {lat: -23.731619, lng: -46.688244},
			 {lat: -23.457215, lng: -46.602599},
			 {lat: -23.473349, lng: -46.649998},
			 {lat: -23.468664, lng: -46.630680},
			 {lat: -23.478936, lng: -46.632721},
			 {lat: -23.621586, lng: -46.640127},
			 {lat: -23.576543, lng: -46.645506},
			 {lat: -23.613607, lng: -46.730668},
			 {lat: -23.574997, lng: -46.635201},
			 {lat: -23.530001, lng: -46.677062},
			 {lat: -23.504105, lng: -46.615063},
			 {lat: -23.509135, lng: -46.627558},
			 {lat: -23.503811, lng: -46.622452},
			 {lat: -23.472988, lng: -46.588650},
			 {lat: -23.510228, lng: -46.625131},
			 {lat: -23.489073, lng: -46.626288},
			 {lat: -23.621131, lng: -46.632420}
		]
		var localizacaoIpiranga = 
		[
            {lat: -23.547746,lng: -46.626109},
            {lat: -23.558152,lng: -46.641447},
            {lat: -23.552565,lng: -46.643309},
            {lat: -23.564812,lng: -46.638680},
            {lat: -23.567879,lng: -46.626220},
            {lat: -23.563242,lng: -46.642166},
            {lat: -23.567612,lng: -46.621786},
            {lat: -23.548486,lng: -46.650420},
            {lat: -23.545583,lng: -46.647953},
            {lat: -23.555999,lng: -46.650075},
            {lat: -23.569659,lng: -46.623391},
            {lat: -23.571924,lng: -46.628844},
            {lat: -23.564389,lng: -46.649196},
            {lat: -23.541108,lng: -46.646971},
            {lat: -23.559143,lng: -46.664752},
            {lat: -23.573894,lng: -46.642144},
            {lat: -23.555211,lng: -46.604179},
            {lat: -23.544294,lng: -46.657087},
            {lat: -23.578305,lng: -46.635153},
            {lat: -23.544213,lng: -46.604462},
            {lat: -23.528099,lng: -46.618090},
            {lat: -23.532879,lng: -46.653039},
            {lat: -23.524936,lng: -46.642661},
            {lat: -23.518436,lng: -46.624186},
            {lat: -23.529293,lng: -46.658566},
            {lat: -23.558482,lng: -46.590656},
            {lat: -23.524489,lng: -46.608880},
            {lat: -23.519249,lng: -46.610095},
            {lat: -23.539978,lng: -46.669914},
            {lat: -23.513714,lng: -46.625906},
            {lat: -23.570762,lng: -46.672971},
            {lat: -23.508310,lng: -46.626436},
            {lat: -23.521407,lng: -46.591687},
            {lat: -23.477349,lng: -46.610674},
            {lat: -23.469241,lng: -46.604093}
        ]
        var localizacaoShel =
        [
            {lat: -23.487052,lng: -46.620344},
            {lat: -23.517750,lng: -46.852970},
            {lat: -23.454902,lng: -46.566413},
            {lat: -23.457763,lng: -46.568634},
            {lat: -23.465199,lng: -46.598776},
            {lat: -23.449674,lng: -46.569298},
            {lat: -23.455834,lng: -46.560192},
            {lat: -23.480334,lng: -46.585799},
            {lat: -23.467830,lng: -46.602198},
            {lat: -23.489762,lng: -46.565001},
            {lat: -23.477575,lng: -46.597562},
            {lat: -23.496100,lng: -46.576677},
            {lat: -23.462054,lng: -46.629166},
            {lat: -23.491828,lng: -46.611316},
            {lat: -23.474307,lng: -46.630394},
            {lat: -23.476631,lng: -46.641282},
            {lat: -23.508701,lng: -46.605353},
            {lat: -23.487008,lng: -46.620412},
            {lat: -23.530350,lng: -46.632041}
        ]
		var infoWindowIpiranga = new google.maps.InfoWindow({});
        var infoWindowPetrobas = new google.maps.InfoWindow({});
        var infoWindowShel     = new google.maps.InfoWindow({});
		
		map.addListener('zoom_changed', function() 
		{					
			z = map.getZoom();
			console.log(z);
				
			if(z >= 11)
			{	
				infoWindow.close(map);
				
				if(z == 11 )
				{		
				
					for(var i in localizacaoPetrobas)
					{
						var marker = new google.maps.Marker(
						{
							position : localizacaoPetrobas[i],
							map: map,
							Animation: google.maps.Animation,
							icon: imagePetrobas
						});
						markers.push(marker);
						
						google.maps.event.addListener(marker, 'click', function() 
						{	
							infoWindowPetrobas.setContent('<div style=text-align:center ><strong>Posto Br</strong><br>Petrobas<br>Preço: não definido <br></div>');
							infoWindowPetrobas.open(map, marker);
							infoWindowPetrobas.setPosition(this.getPosition());	
							
						});			
					}
					
					for(var s in localizacaoIpiranga)
					{
						var markerIpiranga = new google.maps.Marker(
						{
							position: localizacaoIpiranga[s],
							map: map,
							icon: imageIpiranga
						});
						markers.push(markerIpiranga);
						
						google.maps.event.addListener(markerIpiranga, 'click', function()
						{
							infoWindowIpiranga.setContent('<div style=text-align:center ><strong>Posto Ipiranga</strong><br>Ipiranga<br>Preço: não definido <br></div>');
							infoWindowIpiranga.open(map, markerIpiranga);
							infoWindowIpiranga.setPosition(this.getPosition());
						});
						
                    }
                    for(var i in localizacaoShel)
					{
						var markerShel = new google.maps.Marker(
						{
							position : localizacaoShel[i],
							map: map,
							Animation: google.maps.Animation,
							icon: imageShel
						});
						markers.push(markerShel);
						
						google.maps.event.addListener(markerShel, 'click', function() 
						{	
							infoWindowShel.setContent('<div style=text-align:center ><strong>Posto Shell</strong><br>Shell<br>Preço: não definido <br></div>');
							infoWindowShel.open(map, markerShel);
							infoWindowShel.setPosition(this.getPosition());	
							
						});			
					}
				}
			}
			else 
			{	
                infoWindowShel.close(map),
				infoWindowIpiranga.close(map),
				infoWindowPetrobas.close(map),
				setMapOnAll(null),
				infoWindow.open(map)
			}
		
		});
		
		function setMapOnAll(map) 
		{
			for (var i = 0; i < markers.length; i++) 
			{
				markers[i].setMap(map);
			}
		}
					
		var citymap = 
		{
			 Acre : 
			{
				content: 'Acre',
				center: {lat: -9.9754 , lng: -67.8249},
				population: 733469
			},
			Alagoas :
			{
				content: 'Alagoas',
				center: {lat:  -9.66625, lng: -35.7351},
				population: 3120542
			},
			 Amapa :
			{
				content: 'Amapá',
				center: {lat: 0.356, lng: -51.0705},
				population:3483498
			},
			 Amazonas :
			{
				content: 'Amazonas',
				center: {lat:  -3.10719, lng: -60.0261},
				population: 1802014
			},		
			 Bahia :
			{	
				content: 'Bahia',
				center: {lat:  -12.9704, lng: -38.5124 },
				population:	2675656
			},
			 DistritoFederal :
			{
				content: 'Distrito Federal',
				center: {lat: -15.7801,lng: -47.9292 },
				population:	2570160 
			},
			 Ceara :
			{
				content: 'Ceará',
				center: {lat:-3.71839,lng:-38.5434},
				population:	2452185
			},
			 EspiritoSanto :
			{
				content: 'Espírito Santo',
				center: {lat: -20.3222,lng: -40.3381},
				population:3514857
			},
			 Goias :
			{
				content: 'Goiás',
				center: {lat: -16.6799, lng:  -49.255},
				population: 	1302001
			},
			 Maranhao :
			{	
				content: 'Maranhão',
				center: {lat: -2.53073,lng:-44.3068 },
				population:1014837 
			},
			 MatoGrosso :
			{	
				content: 'Mato Grosso',
				center: {lat: -15.5989,lng: -56.0949},
				population:551098 
			},
			 MatoGrossodoSul :
			{	
				content: 'Mato Grosso do Sul',
				center: {lat: -20.4435,lng: -54.6478},
				population: 787204
			},
			 MinasGerais :
			{	
				content: 'Minas Gerais',
				center: {lat:-19.8157, lng: -43.9542},
				population:2375151
			},
			 Para :
			{
				content: 'Pará',
				center: {lat:-1.45502, lng: -48.5024},
				population:	1393399 
			},
			 Paraiba :
			{	
				content: 'Paraiba',
				center: {lat: -7.11532,lng: -34.861},
				population: 723515
			},
			 Parana :
			{
				content: 'Paraná',
				center: {lat: -25.4284, lng: -49.2733},
				population: 	1751907 
			},
			 Pernambuco :
			{	
				content: 'Pernambuco',
				center: {lat: -8.05428, lng: -34.8813},
				population:	1537704 
			},
			 Piaui :
			{	
				content: 'Piaui',
				center: {lat:-5.08921, lng: -42.8016},
				population:	814230
			},
			 RiodeJaneiro :
			{	
				content: 'Rio de Janeiro',
				center: {lat:-22.9035, lng: -43.2096},
				population:6320446
			},
			 RioGrandeDOSul :
			{	
				content: 'Rio Grande do Sul',
				center: {lat: -30.0277, lng: -51.2287},
				population:	1409351 
			},
			 RioGrandeDoNorte :
			{	
				content: 'Rio Grande do Norte',
				center: {lat: -5.79448, lng: -35.211},
				population:	803811
			},
			 Rondonia :
			{	
				content: 'Rondonia',
				center: {lat: -11.4315, lng:-61.4477 },
				population: 78574
			},
			 Roraima :
			{	
				content: 'Roraima',
				center: {lat:2.81954,lng:-60.6714},
				population:	284258
			},
			 SantaCatarina :
			{	
				content: 'Santa Catarina',
				center: {lat:-27.595,lng:-48.5482},
				population:515288
			},
			 SaoPaulo : 
			{	
				content: 'São Paulo',	
				center: {lat: -23.5489, lng: -46.6388},
				population: 11253503
			},
			Sergipe :
			{	
				content: 'Sergipe',
				center: {lat: -10.9095,lng: -37.0748},
				population:570937
			},	
			 Tocantins :
			{	
				content: 'Tocantins',
				center: {lat:-10.1689, lng:-48.3317},
				population:	228297
			}
		  
		};		
				
		for(var city in citymap)
		{
    
			 cityCircle = new google.maps.Circle(
			{    
			  strokeColor: '#87CEFA',    
			  strokeOpacity: 0.8,    
			  strokeWeight: 2,    
			  fillColor: '#87CEFA',    
			  fillOpacity: 0.35,    
			  map: map,    
			  title: "<div style='text-align:center'>"+ citymap[city].content+"<br><div/>",
			  center: citymap[city].center,    
			  radius: Math.sqrt(citymap[city].population) * 70,
			  clickable :  true			 
			});			
						
			var infoWindow = new google.maps.InfoWindow({});			
				
			cityCircle.addListener("click", function(e) 
			{
			
				infoWindow.setContent(this.title);
				infoWindow.open(map);
				infoWindow.setPosition(this.getCenter());
			 
			});
		
        }
        var card = document.getElementById('pac-card');
        var input = document.getElementById('pac-input');
        var types = document.getElementById('type-selector');
        var strictBounds = document.getElementById('strict-bounds-selector');

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

        var autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.bindTo('bounds', map);

        autocomplete.setFields(
            ['address_components', 'geometry', 'icon', 'name']);

        var infowindow = new google.maps.InfoWindow();
        var infowindowContent = document.getElementById('infowindow-content');
        infowindow.setContent(infowindowContent);
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {

            window.alert("Entrada inválida para o nome '" + place.name+ "' digite um  nome válido!!");
            return;
          }

          
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(6);  // Why 17? Because it looks good.
          }
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }

          infowindowContent.children['place-icon'].src = place.icon;
          infowindowContent.children['place-name'].textContent = place.name;
          infowindowContent.children['place-address'].textContent = address;
          infowindow.open(map, marker);
        });
       
        function setupClickListener(id, types) {
          var radioButton = document.getElementById(id);
          radioButton.addEventListener('click', function() {
            autocomplete.setTypes(types);
          });
        }
       
       setupClickListener('changetype-address', ['address']);           
     }

	
