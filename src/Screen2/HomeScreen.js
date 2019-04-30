import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Header, ImageCard, Layout} from "../components/uikit";
import {BATMAN_DETAILS} from "../routes";

const url = 'http://api.tvmaze.com/search/shows?q=batman';

export default class HomeScreen extends Component {
	state = {
		title: 'BATMAN',
		data: [/*{
			"score": 19.615324, "show": {
				"id": 30634,
				"url": "http://www.tvmaze.com/shows/30634/stargate-origins",
				"name": "Stargate Origins",
				"type": "Scripted",
				"language": "English",
				"genres": ["Drama", "Adventure", "Science-Fiction"],
				"status": "To Be Determined",
				"runtime": 10,
				"premiered": "2018-02-15",
				"officialSite": "http://stargatecommand.co/",
				"schedule": {"time": "16:30", "days": ["Thursday"]},
				"rating": {"average": 5.6},
				"weight": 97,
				"network": null,
				"webChannel": {
					"id": 211,
					"name": "Stargate Command",
					"country": {"name": "Canada", "code": "CA", "timezone": "America/Halifax"}
				},
				"externals": {"tvrage": null, "thetvdb": 339552, "imdb": "tt7161862"},
				"image": {
					"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/146/365955.jpg",
					"original": "http://static.tvmaze.com/uploads/images/original_untouched/146/365955.jpg"
				},
				"summary": "<p>In 1939, Professor Paul Langford and his daughter Catherine are still grappling with the mysteries of the ancient relic they discovered in the Egyptian desert more than ten years ago. With war looming in Europe and funding running out, these brilliant minds are approaching their lowest ebb. Little do they know, answers are about to present themselves in a dangerous form, when the Nazi Occultist Dr. Wilhelm Brücke approaches their facility with a sinister motive.</p><p>Enlisting the help of two young soldiers, Catherine must use all of her wit and nous as she and her new allies embark on an adventure into the unknown to rescue her father, and save the Earth from an unimaginable darkness.</p><p><b>Stargate Origins</b> explores the journey that sets a young Catherine Langford on the way to helping unlock the secrets of an ancient technology that could change the very course of humanity.</p>",
				"updated": 1520647472,
				"_links": {
					"self": {"href": "http://api.tvmaze.com/shows/30634"},
					"previousepisode": {"href": "http://api.tvmaze.com/episodes/1412536"}
				}
			}
		}, {
			"score": 18.86462, "show": {
				"id": 206,
				"url": "http://www.tvmaze.com/shows/206/stargate-atlantis",
				"name": "Stargate Atlantis",
				"type": "Scripted",
				"language": "English",
				"genres": ["Action", "Adventure", "Science-Fiction"],
				"status": "Ended",
				"runtime": 60,
				"premiered": "2004-07-16",
				"officialSite": "http://stargate.mgm.com/view/series/2/index.html",
				"schedule": {"time": "21:00", "days": ["Friday"]},
				"rating": {"average": 9},
				"weight": 91,
				"network": {
					"id": 16,
					"name": "Syfy",
					"country": {"name": "United States", "code": "US", "timezone": "America/New_York"}
				},
				"webChannel": null,
				"externals": {"tvrage": 5324, "thetvdb": 70851, "imdb": "tt0374455"},
				"image": {
					"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/1/3059.jpg",
					"original": "http://static.tvmaze.com/uploads/images/original_untouched/1/3059.jpg"
				},
				"summary": "<p>Atlantis, built thousands of years ago by the highly evolved Ancients, is home base for an elite expedition from Earth. These courageous military commanders and scientists leap through the city's Stargate to explore the wondrous Pegasus galaxy and battle the treacherous Wraith, who seek control of Atlantis -- at any cost.</p>",
				"updated": 1550768838,
				"_links": {
					"self": {"href": "http://api.tvmaze.com/shows/206"},
					"previousepisode": {"href": "http://api.tvmaze.com/episodes/13782"}
				}
			}
		}, {
			"score": 18.002, "show": {
				"id": 207,
				"url": "http://www.tvmaze.com/shows/207/stargate-universe",
				"name": "Stargate Universe",
				"type": "Scripted",
				"language": "English",
				"genres": ["Action", "Adventure", "Science-Fiction"],
				"status": "Ended",
				"runtime": 60,
				"premiered": "2009-10-02",
				"officialSite": "http://stargate.mgm.com/view/series/3/index.html",
				"schedule": {"time": "21:00", "days": ["Monday"]},
				"rating": {"average": 8.2},
				"weight": 82,
				"network": {
					"id": 16,
					"name": "Syfy",
					"country": {"name": "United States", "code": "US", "timezone": "America/New_York"}
				},
				"webChannel": null,
				"externals": {"tvrage": 15343, "thetvdb": 83237, "imdb": "tt1286039"},
				"image": {
					"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/204195.jpg",
					"original": "http://static.tvmaze.com/uploads/images/original_untouched/81/204195.jpg"
				},
				"summary": "<p><b>Stargate Universe</b> follows a band of soldiers, scientists and civilians, who must fend for themselves as they are forced through a Stargate when their hidden base comes under attack. The desperate survivors emerge aboard an ancient ship, which is locked on an unknown course and unable to return to Earth. Faced with meeting the most basic needs of food, water and air, the group must unlock the secrets of the ship's Stargate to survive. The danger, adventure and hope they find on board the Destiny will reveal the heroes and villains among them.</p>",
				"updated": 1533413018,
				"_links": {
					"self": {"href": "http://api.tvmaze.com/shows/207"},
					"previousepisode": {"href": "http://api.tvmaze.com/episodes/13822"}
				}
			}
		}, {
			"score": 15.771642, "show": {
				"id": 204,
				"url": "http://www.tvmaze.com/shows/204/stargate-sg-1",
				"name": "Stargate SG-1",
				"type": "Scripted",
				"language": "English",
				"genres": ["Action", "Adventure", "Science-Fiction"],
				"status": "Ended",
				"runtime": 60,
				"premiered": "1997-07-27",
				"officialSite": "http://stargate.mgm.com/view/series/1/index.html",
				"schedule": {"time": "20:00", "days": ["Friday"]},
				"rating": {"average": 9.2},
				"weight": 89,
				"network": {
					"id": 16,
					"name": "Syfy",
					"country": {"name": "United States", "code": "US", "timezone": "America/New_York"}
				},
				"webChannel": null,
				"externals": {"tvrage": 5325, "thetvdb": 72449, "imdb": "tt0118480"},
				"image": {
					"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/1/3027.jpg",
					"original": "http://static.tvmaze.com/uploads/images/original_untouched/1/3027.jpg"
				},
				"summary": "<p><b>Stargate SG-1</b> is a science fiction series based on the original film <i>Stargate</i>. It involves the team SG-1 going on various adventures to different alien worlds through Stargates. Throughout the series they encounter various alien threats and allies including but not limited to the Goa'uld and the Asgard.</p>",
				"updated": 1556007485,
				"_links": {
					"self": {"href": "http://api.tvmaze.com/shows/204"},
					"previousepisode": {"href": "http://api.tvmaze.com/episodes/13649"}
				}
			}
		}, {
			"score": 15.318063, "show": {
				"id": 3721,
				"url": "http://www.tvmaze.com/shows/3721/stargate-infinity",
				"name": "Stargate: Infinity",
				"type": "Scripted",
				"language": "English",
				"genres": ["Action", "Adventure", "Science-Fiction"],
				"status": "Ended",
				"runtime": 30,
				"premiered": "2002-09-14",
				"officialSite": null,
				"schedule": {"time": "", "days": []},
				"rating": {"average": null},
				"weight": 0,
				"network": {
					"id": 4,
					"name": "FOX",
					"country": {"name": "United States", "code": "US", "timezone": "America/New_York"}
				},
				"webChannel": null,
				"externals": {"tvrage": 5323, "thetvdb": 70852, "imdb": "tt0320969"},
				"image": {
					"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/19/47541.jpg",
					"original": "http://static.tvmaze.com/uploads/images/original_untouched/19/47541.jpg"
				},
				"summary": "<p>Inspired by the blockbuster feature film and its two popular television spinoffs: Stargate: SG-1 and Stargate: Atlantis, <b>Stargate: Infinity</b> further explores the universe through the eyes of those few who are brave enough to venture through the mysterious Stargate.<br /><br />This animated series chronicles a generation after the SGC first stepped through the alien device known as the Stargate. The war with the evil parasitic Goa uld is won. The once top-secret Stargate Command and its work have been declassified, and beings from other worlds are living among us.<br /><br />But now there s a new threat and Major Gus Bonner must lead a group of young SGC cadets through the Stargate to protect the life of an Ancient from hostile new enemies.</p>",
				"updated": 1515941737,
				"_links": {
					"self": {"href": "http://api.tvmaze.com/shows/3721"},
					"previousepisode": {"href": "http://api.tvmaze.com/episodes/239688"}
				}
			}
		}, {
			"score": 13.996033, "show": {
				"id": 26585,
				"url": "http://www.tvmaze.com/shows/26585/sgu-stargate-universe-kino",
				"name": "SGU Stargate Universe Kino",
				"type": "Scripted",
				"language": "English",
				"genres": ["Science-Fiction"],
				"status": "Ended",
				"runtime": 1,
				"premiered": "2009-10-22",
				"officialSite": "http://stargate.wikia.com/wiki/Kino_webisodes",
				"schedule": {"time": "", "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"]},
				"rating": {"average": null},
				"weight": 78,
				"network": null,
				"webChannel": {
					"id": 49,
					"name": "SyFy",
					"country": {"name": "United States", "code": "US", "timezone": "America/New_York"}
				},
				"externals": {"tvrage": null, "thetvdb": null, "imdb": "tt1648680"},
				"image": {
					"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/104/261679.jpg",
					"original": "http://static.tvmaze.com/uploads/images/original_untouched/104/261679.jpg"
				},
				"summary": "<p>Stranded in a distant part of the universe, the crew of the Ancient starship Destiny record their thoughts and observations.</p>",
				"updated": 1501656249,
				"_links": {
					"self": {"href": "http://api.tvmaze.com/shows/26585"},
					"previousepisode": {"href": "http://api.tvmaze.com/episodes/1117809"}
				}
			}
		}, {
			"score": 3.7315056, "show": {
				"id": 6536,
				"url": "http://www.tvmaze.com/shows/6536/starcade",
				"name": "Starcade",
				"type": "Game Show",
				"language": "English",
				"genres": [],
				"status": "Ended",
				"runtime": 30,
				"premiered": "1982-12-27",
				"officialSite": "http://www.starcade.tv/starcade/one.asp",
				"schedule": {"time": "", "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]},
				"rating": {"average": null},
				"weight": 0,
				"network": {
					"id": 32,
					"name": "TBS",
					"country": {"name": "United States", "code": "US", "timezone": "America/New_York"}
				},
				"webChannel": null,
				"externals": {"tvrage": null, "thetvdb": 73086, "imdb": "tt0198244"},
				"image": {
					"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/24/62175.jpg",
					"original": "http://static.tvmaze.com/uploads/images/original_untouched/24/62175.jpg"
				},
				"summary": "<p><b>Starcade</b> is a game show where contestants competed against one another by playing arcade video games. The series originally aired on WTBS from 1982–1983, followed by a run in syndication for the following season. The series was first hosted by Mark Richards. Geoff Edwards replaced Richards after the first 23 shows, and continued until the show's cancellation. Two players (or teams; age-regardless) competed.</p><p>Three rounds were played. Each round began with a video arcade-game related toss-up question. The player who buzzed in and answered correctly chose one of five free-standing arcade games in the studio and was given 40 seconds (later 60, then 50) to amass as high a score as possible. The opponent then played the same game, and whatever points the players earned were added to their overall scores. If a player's game ended before time ran out, the turn ended immediately and the player was credited with whatever points they had earned.</p><p>The second and third rounds were played identically, with 40 seconds (later 50) game playing time for the second round, and 30 seconds (later 40) for the third. Once a game was chosen for play in any round, it could not be chosen again. At the end of the second round (and third when the series began), the player in the lead played \"Name the Game,\" attempting to identify four arcade games by screenshots. The player won a prize for correctly identifying at least three of the games. One of the five games was the \"mystery game,\" which awarded a prize to the player who chose it in any of the three rounds. The player in the lead at the end of the third and final round won the game and a bonus prize, and moved on to the bonus round.</p>",
				"updated": 1495450056,
				"_links": {
					"self": {"href": "http://api.tvmaze.com/shows/6536"},
					"previousepisode": {"href": "http://api.tvmaze.com/episodes/384981"}
				}
			}
		}, {
			"score": 1.6305183,
			"show": {
				"id": 26593,
				"url": "http://www.tvmaze.com/shows/26593/vil-i-starte-helt-forfra",
				"name": "Vil i starte helt forfra?",
				"type": "Reality",
				"language": "Danish",
				"genres": [],
				"status": "Running",
				"runtime": 40,
				"premiered": "2017-03-15",
				"officialSite": null,
				"schedule": {"time": "20:00", "days": ["Wednesday"]},
				"rating": {"average": null},
				"weight": 0,
				"network": {
					"id": 322,
					"name": "TV2",
					"country": {"name": "Denmark", "code": "DK", "timezone": "Europe/Copenhagen"}
				},
				"webChannel": null,
				"externals": {"tvrage": null, "thetvdb": 325547, "imdb": null},
				"image": {
					"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/104/261710.jpg",
					"original": "http://static.tvmaze.com/uploads/images/original_untouched/104/261710.jpg"
				},
				"summary": null,
				"updated": 1492588162,
				"_links": {
					"self": {"href": "http://api.tvmaze.com/shows/26593"},
					"previousepisode": {"href": "http://api.tvmaze.com/episodes/1146252"}
				}
			}
		}*/],
	};

	componentDidMount = async () => {
			try {
					const response = await fetch(url);
					const data = await response.json();
					this.setState({data})
			} catch (e) {
					console.error(e.message)
			}
	};

	render() {
		const {title, data} = this.state;
		const {navigation} = this.props;
		const cards = data.map(item => (
			<ImageCard
				data={item.show}
				key={item.show.id}
				onPress={() => navigation.navigate(BATMAN_DETAILS, (item.show))}/>
		));

		return (
			<View>
				<Header
					title={title}
					leftIcon='ios-menu'
					leftColor='#fff'
					onPress={() => navigation.openDrawer()}/>
				<ScrollView>
					<Layout>
						{cards}
					</Layout>
				</ScrollView>
			</View>
		)
	}
}