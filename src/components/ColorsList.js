const colorslist = [
  {
    colorName: "SW 6840 Exuberant Pink",
    colorCode: "rgb(181, 77, 127)",
  },
  {
    colorName: "SW 6855 Dragon Fruit",
    colorCode: "rgb(204, 97, 127)",
  },
  {
    colorName: "SW 6862 Cherries Jubilee",
    colorCode: "rgb(171, 60, 81)",
  },
  {
    colorName: "SW 6861 Radish",
    colorCode: "rgb(164, 46, 65)",
  },
  {
    colorName: "SW 6866 Heartthrob",
    colorCode: "rgb(168, 46, 51)",
  },
  {
    colorName: "SW 6868 Real Red",
    colorCode: "rgb(191, 45, 50)",
  },
  {
    colorName: "SW 6871 Positive Red",
    colorCode: "rgb(173, 44, 52)",
  },
  {
    colorName: "SW 6869 Stop",
    colorCode: "rgb(195, 58, 54)",
  },
  {
    colorName: "SW 6884 Obstinate Orange",
    colorCode: "rgb(215, 85, 42)",
  },
  {
    colorName: "SW 6885 Knockout Orange",
    colorCode: "rgb(225, 111, 62)",
  },
  {
    colorName: "SW 6886 Invigorate",
    colorCode: "rgb(228, 114, 55)",
  },
  {
    colorName: "SW 6887 Navel",
    colorCode: "rgb(236, 132, 48)",
  },
  {
    colorName: "SW 6892 Carnival",
    colorCode: "rgb(235, 136, 44)",
  },
  {
    colorName: "SW 6890 Osage Orange",
    colorCode: "rgb(244, 160, 69)",
  },
  {
    colorName: "SW 6904 Gusto Gold",
    colorCode: "rgb(248, 172, 29)",
  },
  {
    colorName: "SW 6905 Goldfinch",
    colorCode: "rgb(253, 183, 2)",
  },
  {
    colorName: "SW 6902 Decisive Yellow",
    colorCode: "rgb(253, 204, 78)",
  },
  {
    colorName: "SW 6907 Forsythia",
    colorCode: "rgb(255, 200, 1)",
  },
  {
    colorName: "SW 6909 Lemon Twist",
    colorCode: "rgb(254, 217, 93)",
  },
  {
    colorName: "SW 6910 Daisy",
    colorCode: "rgb(254, 211, 64)",
  },
  {
    colorName: "SW 6911 Confident Yellow",
    colorCode: "rgb(254, 203, 1)",
  },
  {
    colorName: "SW 6918 Humorous Green",
    colorCode: "rgb(198, 184, 54)",
  },
  {
    colorName: "SW 6920 Center Stage",
    colorCode: "rgb(178, 194, 22)",
  },
  {
    colorName: "SW 6921 Electric Lime",
    colorCode: "rgb(154, 186, 37)",
  },
  {
    colorName: "SW 6924 Direct Green",
    colorCode: "rgb(63, 138, 36)",
  },
  {
    colorName: "SW 6925 Envy",
    colorCode: "rgb(53, 140, 63)",
  },
  {
    colorName: "SW 6926 Lucky Green",
    colorCode: "rgb(35, 134, 82)",
  },
  {
    colorName: "SW 6927 Greenbelt",
    colorCode: "rgb(1, 114, 68)",
  },
  {
    colorName: "SW 6987 Jitterbug Jade",
    colorCode: "rgb(1, 157, 110)",
  },
  {
    colorName: "SW 6941 Nifty Turquoise",
    colorCode: "rgb(1, 145, 135)",
  },
  {
    colorName: "SW 6942 Splashy",
    colorCode: "rgb(1, 145, 150)",
  },
  {
    colorName: "SW 6943 Intense Teal",
    colorCode: "rgb(1, 118, 128)",
  },
  {
    colorName: "SW 6950 Calypso",
    colorCode: "rgb(1, 176, 187)",
  },
  {
    colorName: "SW 6958 Dynamic Blue",
    colorCode: "rgb(1, 146, 198)",
  },
  {
    colorName: "SW 6965 Hyper Blue",
    colorCode: "rgb(1, 95, 151)",
  },
  {
    colorName: "SW 6959 Blue Chip",
    colorCode: "rgb(1, 110, 167)",
  },
  {
    colorName: "SW 6966 Blueblood",
    colorCode: "rgb(1, 80, 134)",
  },
  {
    colorName: "SW 6967 Frank Blue",
    colorCode: "rgb(34, 82, 136)",
  },
  {
    colorName: "SW 6971 Morning Glory",
    colorCode: "rgb(60, 76, 128)",
  },
  {
    colorName: "SW 6983 Fully Purple",
    colorCode: "rgb(81, 76, 126)",
  },
  {
    colorName: "SW 6982 African Violet",
    colorCode: "rgb(102, 83, 133)",
  },
  {
    colorName: "SW 6981 Passionate Purple",
    colorCode: "rgb(121, 84, 132)",
  },
  {
    colorName: "SW 7023 Requisite Gray",
    colorCode: "rgb(185, 178, 169)",
  },
  {
    colorName: "SW 6072 Versatile Gray",
    colorCode: "rgb(193, 182, 171)",
  },
  {
    colorName: "SW 7016 Mindful Gray",
    colorCode: "rgb(188, 183, 173)",
  },
  {
    colorName: "SW 7044 Amazing Gray",
    colorCode: "rgb(190, 181, 169)",
  },
  {
    colorName: "SW 7638 Jogging Path",
    colorCode: "rgb(192, 185, 169)",
  },
  {
    colorName: "SW 7506 Loggia",
    colorCode: "rgb(196, 183, 165)",
  },
  {
    colorName: "SW 7037 Balanced Beige",
    colorCode: "rgb(192, 178, 162)",
  },
  {
    colorName: "SW 7009 Pearly White",
    colorCode: "rgb(232, 227, 217)",
  },
  {
    colorName: "SW 7008 Alabaster",
    colorCode: "rgb(237, 234, 224)",
  },
  {
    colorName: "SW 7004 Snowbound",
    colorCode: "rgb(237, 234, 229)",
  },
  {
    colorName: "SW 6385 Dover White",
    colorCode: "rgb(240, 234, 220)",
  },
  {
    colorName: "SW 7571 Casa Blanca",
    colorCode: "rgb(237, 225, 206)",
  },
  {
    colorName: "SW 7568 Neutral Ground",
    colorCode: "rgb(226, 218, 202)",
  },
  {
    colorName: "SW 6133 Muslin",
    colorCode: "rgb(234, 223, 201)",
  },
  {
    colorName: "SW 6561 Teaberry",
    colorCode: "rgb(235, 209, 219)",
  },
  {
    colorName: "SW 6568 Lighthearted Pink",
    colorCode: "rgb(237, 213, 221)",
  },
  {
    colorName: "SW 6575 Priscilla",
    colorCode: "rgb(241, 211, 218)",
  },
  {
    colorName: "SW 6582 Impatiens Petal",
    colorCode: "rgb(241, 210, 215)",
  },
  {
    colorName: "SW 6589 Alyssum",
    colorCode: "rgb(242, 213, 215)",
  },
  {
    colorName: "SW 6596 Bella Pink",
    colorCode: "rgb(241, 198, 196)",
  },
  {
    colorName: "SW 6603 Oleander",
    colorCode: "rgb(242, 204, 197)",
  },
  {
    colorName: "SW 6562 Irresistible",
    colorCode: "rgb(227, 192, 207)",
  },
  {
    colorName: "SW 6569 Childlike",
    colorCode: "rgb(232, 192, 207)",
  },
  {
    colorName: "SW 6576 Azalea Flower",
    colorCode: "rgb(239, 192, 203)",
  },
  {
    colorName: "SW 6583 In the Pink",
    colorCode: "rgb(240, 188, 201)",
  },
  {
    colorName: "SW 6590 Loveable",
    colorCode: "rgb(240, 193, 198)",
  },
  {
    colorName: "SW 6597 Hopeful",
    colorCode: "rgb(240, 179, 178)",
  },
  {
    colorName: "SW 6604 Youthful Coral",
    colorCode: "rgb(240, 175, 168)",
  },
  {
    colorName: "SW 6563 Rosebay",
    colorCode: "rgb(203, 154, 173)",
  },
  {
    colorName: "SW 6570 Haute Pink",
    colorCode: "rgb(216, 153, 177)",
  },
  {
    colorName: "SW 6577 Jaipur Pink",
    colorCode: "rgb(227, 146, 161)",
  },
  {
    colorName: "SW 6584 Cheery",
    colorCode: "rgb(235, 146, 163)",
  },
  {
    colorName: "SW 6591 Amaryllis",
    colorCode: "rgb(237, 147, 157)",
  },
  {
    colorName: "SW 6598 Dishy Coral",
    colorCode: "rgb(237, 145, 144)",
  },
  {
    colorName: "SW 6605 Charisma",
    colorCode: "rgb(238, 148, 137)",
  },
  {
    colorName: "SW 6564 Red Clover",
    colorCode: "rgb(184, 126, 147)",
  },
  {
    colorName: "SW 6571 Cyclamen",
    colorCode: "rgb(196, 123, 149)",
  },
  {
    colorName: "SW 6578 Tuberose",
    colorCode: "rgb(212, 124, 140)",
  },
  {
    colorName: "SW 6585 Coming up Roses",
    colorCode: "rgb(221, 119, 136)",
  },
  {
    colorName: "SW 6592 Grenadine",
    colorCode: "rgb(214, 105, 114)",
  },
  {
    colorName: "SW 6599 Begonia",
    colorCode: "rgb(215, 108, 110)",
  },
  {
    colorName: "SW 6606 Coral Reef",
    colorCode: "rgb(217, 118, 108)",
  },
  {
    colorName: "SW 6565 Grandeur Plum",
    colorCode: "rgb(146, 87, 111)",
  },
  {
    colorName: "SW 6572 Ruby Shade",
    colorCode: "rgb(162, 86, 111)",
  },
  {
    colorName: "SW 6579 Gala Pink",
    colorCode: "rgb(176, 75, 99)",
  },
  {
    colorName: "SW 6860 Eros Pink",
    colorCode: "rgb(200, 79, 104)",
  },
  {
    colorName: "SW 6593 Coral Bells",
    colorCode: "rgb(187, 75, 81)",
  },
  {
    colorName: "SW 6600 Enticing Red",
    colorCode: "rgb(183, 78, 79)",
  },
  {
    colorName: "SW 6607 Red Tomato",
    colorCode: "rgb(178, 71, 67)",
  },
  {
    colorName: "SW 6841 Dynamo",
    colorCode: "rgb(149, 61, 104)",
  },
  {
    colorName: "SW 6573 Juneberry",
    colorCode: "rgb(133, 65, 88)",
  },
  {
    colorName: "SW 6843 Hot",
    colorCode: "rgb(172, 67, 98)",
  },
  {
    colorName: "SW 6586 Heartfelt",
    colorCode: "rgb(189, 76, 95)",
  },
  {
    colorName: "SW 7588 Show Stopper",
    colorCode: "rgb(164, 46, 55)",
  },
  {
    colorName: "SW 6601 Tanager",
    colorCode: "rgb(164, 56, 52)",
  },
  {
    colorName: "SW 6608 Rave Red",
    colorCode: "rgb(161, 59, 52)",
  },
  {
    colorName: "SW 6842 Forward Fuchsia",
    colorCode: "rgb(146, 52, 91)",
  },
  {
    colorName: "SW 6566 Framboise",
    colorCode: "rgb(124, 54, 85)",
  },
  {
    colorName: "SW 6580 Cerise",
    colorCode: "rgb(153, 50, 78)",
  },
  {
    colorName: "SW 6587 Valentine",
    colorCode: "rgb(165, 58, 78)",
  },
  {
    colorName: "SW 6594 Poinsettia",
    colorCode: "rgb(157, 55, 60)",
  },
  {
    colorName: "SW 7587 Antique Red",
    colorCode: "rgb(159, 68, 66)",
  },
  {
    colorName: "SW 7600 Bolero",
    colorCode: "rgb(144, 57, 52)",
  },
  {
    colorName: "SW 6610 Koral Kicks",
    colorCode: "rgb(242, 209, 195)",
  },
  {
    colorName: "SW 6617 Blushing",
    colorCode: "rgb(240, 209, 195)",
  },
  {
    colorName: "SW 6624 Peach Blossom",
    colorCode: "rgb(243, 208, 189)",
  },
  {
    colorName: "SW 6631 Naive Peach",
    colorCode: "rgb(243, 211, 191)",
  },
  {
    colorName: "SW 6638 Flattering Peach",
    colorCode: "rgb(244, 211, 179)",
  },
  {
    colorName: "SW 6652 Flan",
    colorCode: "rgb(244, 212, 175)",
  },
  {
    colorName: "SW 6659 Captivating Cream",
    colorCode: "rgb(244, 217, 177)",
  },
  {
    colorName: "SW 6611 Jovial",
    colorCode: "rgb(242, 184, 167)",
  },
  {
    colorName: "SW 6618 Cosmetic Peach",
    colorCode: "rgb(243, 193, 171)",
  },
  {
    colorName: "SW 6625 Certain Peach",
    colorCode: "rgb(242, 189, 162)",
  },
  {
    colorName: "SW 6632 Neighborly Peach",
    colorCode: "rgb(243, 193, 163)",
  },
  {
    colorName: "SW 6639 Avid Apricot",
    colorCode: "rgb(244, 198, 159)",
  },
  {
    colorName: "SW 6653 Delicious Melon",
    colorCode: "rgb(245, 200, 148)",
  },
  {
    colorName: "SW 6660 Honey Blush",
    colorCode: "rgb(245, 207, 155)",
  },
  {
    colorName: "SW 6612 Ravishing Coral",
    colorCode: "rgb(231, 149, 128)",
  },
  {
    colorName: "SW 6619 Sockeye",
    colorCode: "rgb(228, 151, 128)",
  },
  {
    colorName: "SW 6626 Sunset",
    colorCode: "rgb(226, 148, 111)",
  },
  {
    colorName: "SW 6633 Inventive Orange",
    colorCode: "rgb(232, 157, 111)",
  },
  {
    colorName: "SW 9007 Melón Meloso",
    colorCode: "rgb(242, 184, 140)",
  },
  {
    colorName: "SW 6654 Surprise Amber",
    colorCode: "rgb(239, 181, 122)",
  },
  {
    colorName: "SW 9008 Bellini Fizz",
    colorCode: "rgb(245, 199, 142)",
  },
  {
    colorName: "SW 6613 Lei Flower",
    colorCode: "rgb(216, 123, 106)",
  },
  {
    colorName: "SW 6620 Rejuvenate",
    colorCode: "rgb(221, 120, 97)",
  },
  {
    colorName: "SW 6627 Emberglow",
    colorCode: "rgb(214, 124, 86)",
  },
  {
    colorName: "SW 6634 Copper Harbor",
    colorCode: "rgb(213, 126, 82)",
  },
  {
    colorName: "SW 6640 Tangerine",
    colorCode: "rgb(242, 172, 120)",
  },
  {
    colorName: "SW 6655 Adventure Orange",
    colorCode: "rgb(230, 159, 95)",
  },
  {
    colorName: "SW 6661 Papaya",
    colorCode: "rgb(239, 185, 123)",
  },
  {
    colorName: "SW 6614 Quite Coral",
    colorCode: "rgb(199, 99, 86)",
  },
  {
    colorName: "SW 6621 Emotional",
    colorCode: "rgb(198, 95, 71)",
  },
  {
    colorName: "SW 6628 Robust Orange",
    colorCode: "rgb(196, 99, 62)",
  },
  {
    colorName: "SW 6635 Determined Orange",
    colorCode: "rgb(197, 102, 57)",
  },
  {
    colorName: "SW 6641 Outgoing Orange",
    colorCode: "rgb(230, 149, 95)",
  },
  {
    colorName: "SW 6656 Serape",
    colorCode: "rgb(216, 139, 77)",
  },
  {
    colorName: "SW 6662 Summer Day",
    colorCode: "rgb(234, 170, 98)",
  },
  {
    colorName: "SW 6615 Peppery",
    colorCode: "rgb(184, 84, 68)",
  },
  {
    colorName: "SW 6622 Hearty Orange",
    colorCode: "rgb(180, 75, 52)",
  },
  {
    colorName: "SW 6629 Jalapeño",
    colorCode: "rgb(177, 83, 60)",
  },
  {
    colorName: "SW 6636 Husky Orange",
    colorCode: "rgb(187, 97, 62)",
  },
  {
    colorName: "SW 6642 Rhumba Orange",
    colorCode: "rgb(203, 120, 65)",
  },
  {
    colorName: "SW 6657 Amber Wave",
    colorCode: "rgb(210, 130, 64)",
  },
  {
    colorName: "SW 6663 Saffron Thread",
    colorCode: "rgb(223, 152, 78)",
  },
  {
    colorName: "SW 7589 Habanero Chile",
    colorCode: "rgb(184, 71, 61)",
  },
  {
    colorName: "SW 6881 Cayenne",
    colorCode: "rgb(192, 77, 53)",
  },
  {
    colorName: "SW 7599 Brick Paver",
    colorCode: "rgb(147, 64, 47)",
  },
  {
    colorName: "SW 6883 Raucous Orange",
    colorCode: "rgb(195, 85, 48)",
  },
  {
    colorName: "SW 6643 Yam",
    colorCode: "rgb(195, 111, 62)",
  },
  {
    colorName: "SW 7703 Earthen Jug",
    colorCode: "rgb(168, 94, 57)",
  },
  {
    colorName: "SW 6664 Marigold",
    colorCode: "rgb(210, 130, 51)",
  },
  {
    colorName: "SW 6666 Enjoyable Yellow",
    colorCode: "rgb(245, 214, 169)",
  },
  {
    colorName: "SW 6673 Banana Cream",
    colorCode: "rgb(245, 222, 175)",
  },
  {
    colorName: "SW 9015 They call it Mellow",
    colorCode: "rgb(251, 228, 179)",
  },
  {
    colorName: "SW 6680 Friendly Yellow",
    colorCode: "rgb(245, 224, 177)",
  },
  {
    colorName: "SW 6687 Lantern Light",
    colorCode: "rgb(244, 225, 174)",
  },
  {
    colorName: "SW 6694 Glad Yellow",
    colorCode: "rgb(245, 225, 172)",
  },
  {
    colorName: "SW 1668 Pineapple Cream",
    colorCode: "rgb(242, 234, 195)",
  },
  {
    colorName: "SW 6667 Afterglow",
    colorCode: "rgb(246, 205, 142)",
  },
  {
    colorName: "SW 6674 Jonquil",
    colorCode: "rgb(247, 211, 145)",
  },
  {
    colorName: "SW 9016 La Luna Amarilla",
    colorCode: "rgb(253, 223, 160)",
  },
  {
    colorName: "SW 6681 Butter Up",
    colorCode: "rgb(246, 221, 163)",
  },
  {
    colorName: "SW 6688 Solaria",
    colorCode: "rgb(245, 214, 143)",
  },
  {
    colorName: "SW 6695 Midday",
    colorCode: "rgb(247, 215, 138)",
  },
  {
    colorName: "SW 1667 Icy Lemonade",
    colorCode: "rgb(244, 232, 178)",
  },
  {
    colorName: "SW 6668 Sunrise",
    colorCode: "rgb(244, 191, 119)",
  },
  {
    colorName: "SW 9014 Pollen Powder",
    colorCode: "rgb(251, 209, 135)",
  },
  {
    colorName: "SW 9017 Sunny Veranda",
    colorCode: "rgb(254, 223, 148)",
  },
  {
    colorName: "SW 9021 Naples Yellow",
    colorCode: "rgb(246, 213, 143)",
  },
  {
    colorName: "SW 9022 Yellow Bird",
    colorCode: "rgb(241, 205, 123)",
  },
  {
    colorName: "SW 6696 Quilt Gold",
    colorCode: "rgb(234, 195, 101)",
  },
  {
    colorName: "SW 1666 Venetian Yellow",
    colorCode: "rgb(246, 227, 161)",
  },
  {
    colorName: "SW 9013 Olden Amber",
    colorCode: "rgb(238, 183, 107)",
  },
  {
    colorName: "SW 6675 Afternoon",
    colorCode: "rgb(251, 203, 120)",
  },
  {
    colorName: "SW 9018 Honey Bees",
    colorCode: "rgb(251, 214, 130)",
  },
  {
    colorName: "SW 6682 June Day",
    colorCode: "rgb(246, 201, 115)",
  },
  {
    colorName: "SW 6689 Overjoy",
    colorCode: "rgb(238, 194, 95)",
  },
  {
    colorName: "SW 6697 Nugget",
    colorCode: "rgb(219, 176, 74)",
  },
  {
    colorName: "SW 6908 Fun Yellow",
    colorCode: "rgb(247, 229, 148)",
  },
  {
    colorName: "SW 6669 Yarrow",
    colorCode: "rgb(235, 173, 94)",
  },
  {
    colorName: "SW 6676 Butterfield",
    colorCode: "rgb(247, 190, 91)",
  },
  {
    colorName: "SW 9019 Golden Plumeria",
    colorCode: "rgb(251, 208, 115)",
  },
  {
    colorName: "SW 6683 Bee",
    colorCode: "rgb(241, 186, 85)",
  },
  {
    colorName: "SW 6690 Gambol Gold",
    colorCode: "rgb(225, 176, 71)",
  },
  {
    colorName: "SW 6698 Kingdom Gold",
    colorCode: "rgb(209, 164, 54)",
  },
  {
    colorName: "SW 6913 Funky Yellow",
    colorCode: "rgb(237, 210, 111)",
  },
  {
    colorName: "SW 6670 Gold Crest",
    colorCode: "rgb(223, 153, 56)",
  },
  {
    colorName: "SW 6677 Goldenrod",
    colorCode: "rgb(242, 175, 70)",
  },
  {
    colorName: "SW 9020 Rayo de Sol",
    colorCode: "rgb(244, 196, 84)",
  },
  {
    colorName: "SW 6684 Brittlebush",
    colorCode: "rgb(234, 174, 71)",
  },
  {
    colorName: "SW 6691 Glitzy Gold",
    colorCode: "rgb(214, 160, 43)",
  },
  {
    colorName: "SW 6699 Crispy Gold",
    colorCode: "rgb(196, 152, 50)",
  },
  {
    colorName: "SW 6914 Eye Catching",
    colorCode: "rgb(221, 184, 53)",
  },
  {
    colorName: "SW 6671 Curry",
    colorCode: "rgb(216, 143, 50)",
  },
  {
    colorName: "SW 6678 Sunflower",
    colorCode: "rgb(227, 154, 51)",
  },
  {
    colorName: "SW 6903 Cheerful",
    colorCode: "rgb(255, 199, 35)",
  },
  {
    colorName: "SW 6685 Trinket",
    colorCode: "rgb(214, 152, 53)",
  },
  {
    colorName: "SW 6692 Auric",
    colorCode: "rgb(196, 137, 25)",
  },
  {
    colorName: "SW 7700 Olde World Gold",
    colorCode: "rgb(143, 108, 62)",
  },
  {
    colorName: "SW 6915 Citronella",
    colorCode: "rgb(203, 169, 1)",
  },
  {
    colorName: "SW 6701 Moonraker",
    colorCode: "rgb(238, 227, 178)",
  },
  {
    colorName: "SW 6708 Springtime",
    colorCode: "rgb(233, 229, 179)",
  },
  {
    colorName: "SW 6715 Lime Granita",
    colorCode: "rgb(220, 225, 184)",
  },
  {
    colorName: "SW 6729 Lacewing",
    colorCode: "rgb(215, 227, 202)",
  },
  {
    colorName: "SW 6722 Cucumber",
    colorCode: "rgb(211, 223, 195)",
  },
  {
    colorName: "SW 6736 Jocular Green",
    colorCode: "rgb(204, 226, 202)",
  },
  {
    colorName: "SW 6743 Mint Condition",
    colorCode: "rgb(209, 227, 210)",
  },
  {
    colorName: "SW 6702 Lively Yellow",
    colorCode: "rgb(230, 216, 142)",
  },
  {
    colorName: "SW 6709 Gleeful",
    colorCode: "rgb(218, 215, 144)",
  },
  {
    colorName: "SW 6716 Dancing Green",
    colorCode: "rgb(197, 205, 143)",
  },
  {
    colorName: "SW 6730 Romaine",
    colorCode: "rgb(192, 210, 173)",
  },
  {
    colorName: "SW 6723 Jardin",
    colorCode: "rgb(189, 208, 171)",
  },
  {
    colorName: "SW 6737 Kiwi",
    colorCode: "rgb(174, 210, 176)",
  },
  {
    colorName: "SW 6744 Reclining Green",
    colorCode: "rgb(183, 215, 191)",
  },
  {
    colorName: "SW 6703 Frolic",
    colorCode: "rgb(217, 198, 97)",
  },
  {
    colorName: "SW 9031 Primavera",
    colorCode: "rgb(210, 208, 131)",
  },
  {
    colorName: "SW 6717 Lime Rickey",
    colorCode: "rgb(175, 185, 106)",
  },
  {
    colorName: "SW 9033 Oh Pistachio",
    colorCode: "rgb(171, 202, 153)",
  },
  {
    colorName: "SW 9034 Seawashed Glass",
    colorCode: "rgb(169, 192, 149)",
  },
  {
    colorName: "SW 6738 Vegan",
    colorCode: "rgb(142, 194, 152)",
  },
  {
    colorName: "SW 9036 Retro Mint",
    colorCode: "rgb(159, 205, 177)",
  },
  {
    colorName: "SW 9030 Limón Fresco",
    colorCode: "rgb(206, 188, 85)",
  },
  {
    colorName: "SW 6710 Mélange Green",
    colorCode: "rgb(196, 196, 118)",
  },
  {
    colorName: "SW 9032 Stay in Lime",
    colorCode: "rgb(159, 172, 92)",
  },
  {
    colorName: "SW 6731 Picnic",
    colorCode: "rgb(153, 194, 133)",
  },
  {
    colorName: "SW 6724 Mesclun Green",
    colorCode: "rgb(157, 182, 130)",
  },
  {
    colorName: "SW 9035 Frosted Emerald",
    colorCode: "rgb(120, 177, 133)",
  },
  {
    colorName: "SW 6745 Lark Green",
    colorCode: "rgb(138, 193, 161)",
  },
  {
    colorName: "SW 6704 Hep Green",
    colorCode: "rgb(196, 177, 70)",
  },
  {
    colorName: "SW 6711 Parakeet",
    colorCode: "rgb(180, 176, 90)",
  },
  {
    colorName: "SW 6718 Overt Green",
    colorCode: "rgb(151, 165, 84)",
  },
  {
    colorName: "SW 6732 Organic Green",
    colorCode: "rgb(127, 172, 110)",
  },
  {
    colorName: "SW 6725 Pickle",
    colorCode: "rgb(133, 161, 106)",
  },
  {
    colorName: "SW 6739 Eco Green",
    colorCode: "rgb(104, 166, 120)",
  },
  {
    colorName: "SW 6746 Julep",
    colorCode: "rgb(87, 170, 128)",
  },
  {
    colorName: "SW 6705 High Strung",
    colorCode: "rgb(172, 152, 37)",
  },
  {
    colorName: "SW 6712 Luau Green",
    colorCode: "rgb(152, 151, 70)",
  },
  {
    colorName: "SW 6719 Gecko",
    colorCode: "rgb(122, 136, 51)",
  },
  {
    colorName: "SW 6733 Grasshopper",
    colorCode: "rgb(79, 133, 74)",
  },
  {
    colorName: "SW 6726 Talipot Palm",
    colorCode: "rgb(100, 129, 73)",
  },
  {
    colorName: "SW 6740 Kilkenny",
    colorCode: "rgb(73, 133, 85)",
  },
  {
    colorName: "SW 6747 Argyle",
    colorCode: "rgb(52, 138, 93)",
  },
  {
    colorName: "SW 6706 Offbeat Green",
    colorCode: "rgb(156, 139, 31)",
  },
  {
    colorName: "SW 6713 Verdant",
    colorCode: "rgb(132, 126, 53)",
  },
  {
    colorName: "SW 6720 Paradise",
    colorCode: "rgb(108, 123, 48)",
  },
  {
    colorName: "SW 6734 Espalier",
    colorCode: "rgb(47, 95, 58)",
  },
  {
    colorName: "SW 6727 Houseplant",
    colorCode: "rgb(88, 113, 63)",
  },
  {
    colorName: "SW 6741 Derbyshire",
    colorCode: "rgb(36, 94, 54)",
  },
  {
    colorName: "SW 6748 Greens",
    colorCode: "rgb(1, 104, 68)",
  },
  {
    colorName: "SW 6750 Waterfall",
    colorCode: "rgb(192, 227, 218)",
  },
  {
    colorName: "SW 6757 Tame Teal",
    colorCode: "rgb(193, 230, 223)",
  },
  {
    colorName: "SW 6764 Swimming",
    colorCode: "rgb(194, 229, 229)",
  },
  {
    colorName: "SW 6771 Bathe Blue",
    colorCode: "rgb(194, 224, 227)",
  },
  {
    colorName: "SW 6778 Aviary Blue",
    colorCode: "rgb(198, 227, 232)",
  },
  {
    colorName: "SW 6785 Quench Blue",
    colorCode: "rgb(180, 224, 231)",
  },
  {
    colorName: "SW 6792 Minor Blue",
    colorCode: "rgb(183, 223, 232)",
  },
  {
    colorName: "SW 6751 Refresh",
    colorCode: "rgb(161, 212, 200)",
  },
  {
    colorName: "SW 6758 Aqueduct",
    colorCode: "rgb(161, 213, 203)",
  },
  {
    colorName: "SW 6765 Spa",
    colorCode: "rgb(167, 220, 220)",
  },
  {
    colorName: "SW 6772 Cay",
    colorCode: "rgb(166, 208, 214)",
  },
  {
    colorName: "SW 6779 Liquid Blue",
    colorCode: "rgb(166, 212, 222)",
  },
  {
    colorName: "SW 6786 Cloudless",
    colorCode: "rgb(143, 208, 221)",
  },
  {
    colorName: "SW 6793 Bluebell",
    colorCode: "rgb(162, 213, 231)",
  },
  {
    colorName: "SW 9043 Aquastone",
    colorCode: "rgb(137, 198, 183)",
  },
  {
    colorName: "SW 9044 Little Blue Box",
    colorCode: "rgb(138, 197, 186)",
  },
  {
    colorName: "SW 9045 Bora Bora Shore",
    colorCode: "rgb(146, 208, 208)",
  },
  {
    colorName: "SW 9046 Gentle Aquamarine",
    colorCode: "rgb(151, 203, 210)",
  },
  {
    colorName: "SW 9047 After the Rain",
    colorCode: "rgb(139, 196, 209)",
  },
  {
    colorName: "SW 9048 Surfin'",
    colorCode: "rgb(115, 192, 210)",
  },
  {
    colorName: "SW 9049 Sky Fall",
    colorCode: "rgb(137, 198, 223)",
  },
  {
    colorName: "SW 6752 Larchmere",
    colorCode: "rgb(112, 186, 167)",
  },
  {
    colorName: "SW 6759 Cooled Blue",
    colorCode: "rgb(117, 185, 174)",
  },
  {
    colorName: "SW 6766 Mariner",
    colorCode: "rgb(110, 194, 196)",
  },
  {
    colorName: "SW 6773 Rapture Blue",
    colorCode: "rgb(125, 193, 203)",
  },
  {
    colorName: "SW 6780 Nautilus",
    colorCode: "rgb(113, 184, 199)",
  },
  {
    colorName: "SW 6787 Fountain",
    colorCode: "rgb(86, 181, 202)",
  },
  {
    colorName: "SW 6794 Flyway",
    colorCode: "rgb(93, 179, 212)",
  },
  {
    colorName: "SW 6753 Jargon Jade",
    colorCode: "rgb(83, 163, 143)",
  },
  {
    colorName: "SW 6760 Rivulet",
    colorCode: "rgb(97, 168, 157)",
  },
  {
    colorName: "SW 6767 Aquarium",
    colorCode: "rgb(58, 169, 174)",
  },
  {
    colorName: "SW 6774 Freshwater",
    colorCode: "rgb(77, 166, 178)",
  },
  {
    colorName: "SW 6781 Jamaica Bay",
    colorCode: "rgb(52, 163, 182)",
  },
  {
    colorName: "SW 6788 Capri",
    colorCode: "rgb(1, 160, 184)",
  },
  {
    colorName: "SW 6795 Major Blue",
    colorCode: "rgb(40, 158, 196)",
  },
  {
    colorName: "SW 6754 Ionian",
    colorCode: "rgb(54, 137, 118)",
  },
  {
    colorName: "SW 6761 Thermal Spring",
    colorCode: "rgb(59, 140, 128)",
  },
  {
    colorName: "SW 6768 Gulfstream",
    colorCode: "rgb(1, 133, 139)",
  },
  {
    colorName: "SW 6775 Briny",
    colorCode: "rgb(8, 128, 142)",
  },
  {
    colorName: "SW 6782 Cruising",
    colorCode: "rgb(1, 132, 152)",
  },
  {
    colorName: "SW 6789 Blue Mosque",
    colorCode: "rgb(1, 129, 158)",
  },
  {
    colorName: "SW 6796 Blue Plate",
    colorCode: "rgb(1, 124, 167)",
  },
  {
    colorName: "SW 6755 Starboard",
    colorCode: "rgb(1, 108, 79)",
  },
  {
    colorName: "SW 6762 Poseidon",
    colorCode: "rgb(1, 109, 96)",
  },
  {
    colorName: "SW 6769 Maxi Teal",
    colorCode: "rgb(1, 116, 120)",
  },
  {
    colorName: "SW 6776 Blue Nile",
    colorCode: "rgb(1, 113, 126)",
  },
  {
    colorName: "SW 6783 Amalfi",
    colorCode: "rgb(1, 110, 133)",
  },
  {
    colorName: "SW 6790 Adriatic Sea",
    colorCode: "rgb(1, 96, 129)",
  },
  {
    colorName: "SW 6797 Jay Blue",
    colorCode: "rgb(1, 93, 135)",
  },
  {
    colorName: "SW 6799 Soar",
    colorCode: "rgb(195, 223, 232)",
  },
  {
    colorName: "SW 6526 Icelandic",
    colorCode: "rgb(203, 216, 225)",
  },
  {
    colorName: "SW 6806 Rhythmic Blue",
    colorCode: "rgb(204, 219, 229)",
  },
  {
    colorName: "SW 6813 Wishful Blue",
    colorCode: "rgb(216, 221, 230)",
  },
  {
    colorName: "SW 6820 Inspired Lilac",
    colorCode: "rgb(223, 217, 228)",
  },
  {
    colorName: "SW 6827 Elation",
    colorCode: "rgb(223, 220, 229)",
  },
  {
    colorName: "SW 6834 Spangle",
    colorCode: "rgb(229, 219, 229)",
  },
  {
    colorName: "SW 6800 Something Blue",
    colorCode: "rgb(176, 214, 230)",
  },
  {
    colorName: "SW 6527 Blissful Blue",
    colorCode: "rgb(178, 200, 216)",
  },
  {
    colorName: "SW 6807 Wondrous Blue",
    colorCode: "rgb(184, 205, 221)",
  },
  {
    colorName: "SW 6814 Breathtaking",
    colorCode: "rgb(199, 209, 226)",
  },
  {
    colorName: "SW 6821 Potentially Purple",
    colorCode: "rgb(209, 203, 223)",
  },
  {
    colorName: "SW 6828 Rhapsody Lilac",
    colorCode: "rgb(210, 200, 221)",
  },
  {
    colorName: "SW 6835 Euphoric Lilac",
    colorCode: "rgb(218, 199, 218)",
  },
  {
    colorName: "SW 9063 Porch Ceiling",
    colorCode: "rgb(155, 200, 222)",
  },
  {
    colorName: "SW 6528 Cosmos",
    colorCode: "rgb(142, 169, 194)",
  },
  {
    colorName: "SW 6808 Celestial",
    colorCode: "rgb(151, 179, 208)",
  },
  {
    colorName: "SW 9066 Agapanthus",
    colorCode: "rgb(187, 197, 222)",
  },
  {
    colorName: "SW 6822 Wisteria",
    colorCode: "rgb(189, 180, 212)",
  },
  {
    colorName: "SW 6829 Magical",
    colorCode: "rgb(192, 175, 208)",
  },
  {
    colorName: "SW 6836 Novel Lilac",
    colorCode: "rgb(194, 164, 194)",
  },
  {
    colorName: "SW 6801 Regale Blue",
    colorCode: "rgb(125, 181, 211)",
  },
  {
    colorName: "SW 9064 Bluesy Note",
    colorCode: "rgb(124, 154, 181)",
  },
  {
    colorName: "SW 6809 Lobelia",
    colorCode: "rgb(116, 152, 190)",
  },
  {
    colorName: "SW 6815 Awesome Violet",
    colorCode: "rgb(167, 178, 212)",
  },
  {
    colorName: "SW 9067 Forever Lilac",
    colorCode: "rgb(175, 165, 199)",
  },
  {
    colorName: "SW 9068 Berry Frappé",
    colorCode: "rgb(179, 161, 198)",
  },
  {
    colorName: "SW 6837 Baroness",
    colorCode: "rgb(167, 133, 167)",
  },
  {
    colorName: "SW 6802 Jacaranda",
    colorCode: "rgb(90, 158, 192)",
  },
  {
    colorName: "SW 6529 Scanda",
    colorCode: "rgb(107, 140, 169)",
  },
  {
    colorName: "SW 9065 Perfect Periwinkle",
    colorCode: "rgb(100, 135, 176)",
  },
  {
    colorName: "SW 6816 Dahlia",
    colorCode: "rgb(139, 152, 196)",
  },
  {
    colorName: "SW 6823 Brave Purple",
    colorCode: "rgb(150, 141, 184)",
  },
  {
    colorName: "SW 6830 Kismet",
    colorCode: "rgb(161, 138, 183)",
  },
  {
    colorName: "SW 9069 Veri Berri",
    colorCode: "rgb(147, 116, 150)",
  },
  {
    colorName: "SW 6803 Danube",
    colorCode: "rgb(35, 119, 162)",
  },
  {
    colorName: "SW 6530 Revel Blue",
    colorCode: "rgb(76, 107, 138)",
  },
  {
    colorName: "SW 6810 Lupine",
    colorCode: "rgb(78, 115, 159)",
  },
  {
    colorName: "SW 6817 Gentian",
    colorCode: "rgb(101, 114, 165)",
  },
  {
    colorName: "SW 6824 Forget-Me-Not",
    colorCode: "rgb(113, 105, 152)",
  },
  {
    colorName: "SW 6831 Clematis",
    colorCode: "rgb(126, 101, 150)",
  },
  {
    colorName: "SW 6838 Vigorous Violet",
    colorCode: "rgb(124, 90, 126)",
  },
  {
    colorName: "SW 6804 Dignity Blue",
    colorCode: "rgb(9, 76, 115)",
  },
  {
    colorName: "SW 6531 Indigo",
    colorCode: "rgb(40, 74, 112)",
  },
  {
    colorName: "SW 6811 Honorable Blue",
    colorCode: "rgb(22, 69, 118)",
  },
  {
    colorName: "SW 6818 Valiant Violet",
    colorCode: "rgb(62, 67, 113)",
  },
  {
    colorName: "SW 6825 Izmir Purple",
    colorCode: "rgb(77, 66, 110)",
  },
  {
    colorName: "SW 6832 Impulsive Purple",
    colorCode: "rgb(98, 73, 119)",
  },
  {
    colorName: "SW 6839 Kimono Violet",
    colorCode: "rgb(93, 57, 95)",
  },
  {
    colorName: "SW 7661 Reflection",
    colorCode: "rgb(211, 213, 211)",
  },
  {
    colorName: "SW 6253 Olympus White",
    colorCode: "rgb(212, 216, 215)",
  },
  {
    colorName: "SW 7071 Gray Screen",
    colorCode: "rgb(198, 202, 202)",
  },
  {
    colorName: "SW 7064 Passive",
    colorCode: "rgb(203, 204, 201)",
  },
  {
    colorName: "SW 7057 Silver Strand",
    colorCode: "rgb(200, 203, 196)",
  },
  {
    colorName: "SW 9165 Gossamer Veil",
    colorCode: "rgb(211, 206, 196)",
  },
  {
    colorName: "SW 7653 Silverpointe",
    colorCode: "rgb(209, 210, 203)",
  },
  {
    colorName: "SW 7662 Evening Shadow",
    colorCode: "rgb(201, 204, 205)",
  },
  {
    colorName: "SW 6254 Lazy Gray",
    colorCode: "rgb(190, 193, 195)",
  },
  {
    colorName: "SW 7072 Online",
    colorCode: "rgb(176, 181, 181)",
  },
  {
    colorName: "SW 7065 Argos",
    colorCode: "rgb(189, 189, 183)",
  },
  {
    colorName: "SW 7058 Magnetic Gray",
    colorCode: "rgb(178, 181, 175)",
  },
  {
    colorName: "SW 9166 Drift of Mist",
    colorCode: "rgb(220, 216, 208)",
  },
  {
    colorName: "SW 7654 Lattice",
    colorCode: "rgb(206, 206, 198)",
  },
  {
    colorName: "SW 7663 Monorail Silver",
    colorCode: "rgb(184, 188, 187)",
  },
  {
    colorName: "SW 6255 Morning Fog",
    colorCode: "rgb(168, 174, 177)",
  },
  {
    colorName: "SW 7073 Network Gray",
    colorCode: "rgb(160, 165, 167)",
  },
  {
    colorName: "SW 7066 Gray Matters",
    colorCode: "rgb(167, 168, 162)",
  },
  {
    colorName: "SW 7059 Unusual Gray",
    colorCode: "rgb(163, 167, 160)",
  },
  {
    colorName: "SW 7658 Gray Clouds",
    colorCode: "rgb(183, 183, 178)",
  },
  {
    colorName: "SW 7651 Front Porch",
    colorCode: "rgb(204, 204, 197)",
  },
  {
    colorName: "SW 7664 Steely Gray",
    colorCode: "rgb(144, 151, 155)",
  },
  {
    colorName: "SW 9161 Dustblu",
    colorCode: "rgb(149, 155, 160)",
  },
  {
    colorName: "SW 9162 African Gray",
    colorCode: "rgb(147, 152, 153)",
  },
  {
    colorName: "SW 9163 Tin Lizzie",
    colorCode: "rgb(147, 149, 145)",
  },
  {
    colorName: "SW 9164 Illusive Green",
    colorCode: "rgb(146, 148, 141)",
  },
  {
    colorName: "SW 7652 Mineral Deposit",
    colorCode: "rgb(171, 176, 172)",
  },
  {
    colorName: "SW 7657 Tinsmith",
    colorCode: "rgb(197, 200, 196)",
  },
  {
    colorName: "SW 7665 Wall Street",
    colorCode: "rgb(101, 109, 115)",
  },
  {
    colorName: "SW 6256 Serious Gray",
    colorCode: "rgb(125, 132, 139)",
  },
  {
    colorName: "SW 7074 Software",
    colorCode: "rgb(127, 132, 134)",
  },
  {
    colorName: "SW 7067 Cityscape",
    colorCode: "rgb(127, 129, 126)",
  },
  {
    colorName: "SW 7060 Attitude Gray",
    colorCode: "rgb(124, 125, 117)",
  },
  {
    colorName: "SW 7659 Gris",
    colorCode: "rgb(165, 169, 168)",
  },
  {
    colorName: "SW 7649 Silverplate",
    colorCode: "rgb(194, 192, 186)",
  },
  {
    colorName: "SW 7624 Slate Tile",
    colorCode: "rgb(96, 110, 116)",
  },
  {
    colorName: "SW 6257 Gibraltar",
    colorCode: "rgb(98, 105, 112)",
  },
  {
    colorName: "SW 7075 Web Gray",
    colorCode: "rgb(97, 102, 105)",
  },
  {
    colorName: "SW 7068 Grizzle Gray",
    colorCode: "rgb(99, 101, 98)",
  },
  {
    colorName: "SW 7061 Night Owl",
    colorCode: "rgb(99, 101, 95)",
  },
  {
    colorName: "SW 7660 Earl Grey",
    colorCode: "rgb(150, 154, 150)",
  },
  {
    colorName: "SW 7650 Ellie Gray",
    colorCode: "rgb(170, 169, 164)",
  },
  {
    colorName: "SW 7604 Smoky Blue",
    colorCode: "rgb(89, 110, 121)",
  },
  {
    colorName: "SW 7615 Sea Serpent",
    colorCode: "rgb(62, 75, 84)",
  },
  {
    colorName: "SW 7076 Cyberspace",
    colorCode: "rgb(68, 72, 77)",
  },
  {
    colorName: "SW 7674 Peppercorn",
    colorCode: "rgb(88, 88, 88)",
  },
  {
    colorName: "SW 7749 Laurel Woods",
    colorCode: "rgb(68, 73, 61)",
  },
  {
    colorName: "SW 7622 Homburg Gray",
    colorCode: "rgb(102, 109, 105)",
  },
  {
    colorName: "SW 7655 Stamped Concrete",
    colorCode: "rgb(160, 160, 154)",
  },
  {
    colorName: "SW 7551 Greek Villa",
    colorCode: "rgb(240, 236, 226)",
  },
  {
    colorName: "SW 7005 Pure White",
    colorCode: "rgb(237, 236, 230)",
  },
  {
    colorName: "SW 7757 High Reflective White",
    colorCode: "rgb(247, 247, 241)",
  },
  {
    colorName: "SW 7006 Extra White",
    colorCode: "rgb(238, 239, 234)",
  },
  {
    colorName: "SW 6203 Spare White",
    colorCode: "rgb(228, 228, 221)",
  },
  {
    colorName: "SW 6070 Heron Plume",
    colorCode: "rgb(229, 225, 216)",
  },
  {
    colorName: "SW 7100 Arcade White",
    colorCode: "rgb(243, 238, 231)",
  },
  {
    colorName: "SW 7009 Pearly White",
    colorCode: "rgb(232, 227, 217)",
  },
  {
    colorName: "SW 7008 Alabaster",
    colorCode: "rgb(237, 234, 224)",
  },
  {
    colorName: "SW 7004 Snowbound",
    colorCode: "rgb(237, 234, 229)",
  },
  {
    colorName: "SW 7007 Ceiling Bright White",
    colorCode: "rgb(233, 235, 231)",
  },
  {
    colorName: "SW 7056 Reserved White",
    colorCode: "rgb(224, 224, 217)",
  },
  {
    colorName: "SW 7626 Zurich White",
    colorCode: "rgb(230, 225, 217)",
  },
  {
    colorName: "SW 7000 Ibis White",
    colorCode: "rgb(242, 236, 230)",
  },
  {
    colorName: "SW 7013 Ivory Lace",
    colorCode: "rgb(236, 229, 216)",
  },
  {
    colorName: "SW 7566 Westhighland White",
    colorCode: "rgb(243, 238, 227)",
  },
  {
    colorName: "SW 7003 Toque White",
    colorCode: "rgb(231, 226, 218)",
  },
  {
    colorName: "SW 6252 Ice Cube",
    colorCode: "rgb(227, 228, 225)",
  },
  {
    colorName: "SW 7666 Fleur de Sel",
    colorCode: "rgb(220, 221, 216)",
  },
  {
    colorName: "SW 7636 Origami White",
    colorCode: "rgb(229, 226, 218)",
  },
  {
    colorName: "SW 6028 Cultured Pearl",
    colorCode: "rgb(229, 220, 214)",
  },
  {
    colorName: "SW 7042 Shoji White",
    colorCode: "rgb(230, 223, 211)",
  },
  {
    colorName: "SW 7570 Egret White",
    colorCode: "rgb(223, 217, 207)",
  },
  {
    colorName: "SW 7028 Incredible White",
    colorCode: "rgb(227, 222, 215)",
  },
  {
    colorName: "SW 7656 Rhinestone",
    colorCode: "rgb(222, 224, 222)",
  },
  {
    colorName: "SW 6196 Frosty White",
    colorCode: "rgb(221, 221, 214)",
  },
  {
    colorName: "SW 7035 Aesthetic White",
    colorCode: "rgb(227, 221, 211)",
  },
  {
    colorName: "SW 6063 Nice White",
    colorCode: "rgb(230, 221, 213)",
  },
  {
    colorName: "SW 7010 White Duck",
    colorCode: "rgb(229, 223, 210)",
  },
  {
    colorName: "SW 7634 Pediment",
    colorCode: "rgb(211, 204, 196)",
  },
  {
    colorName: "SW 7014 Eider White",
    colorCode: "rgb(226, 222, 216)",
  },
  {
    colorName: "SW 7063 Nebulous White",
    colorCode: "rgb(222, 223, 220)",
  },
  {
    colorName: "SW 6182 Ethereal White",
    colorCode: "rgb(227, 226, 217)",
  },
  {
    colorName: "SW 7627 White Heron",
    colorCode: "rgb(231, 225, 215)",
  },
  {
    colorName: "SW 6077 Everyday White",
    colorCode: "rgb(228, 220, 212)",
  },
  {
    colorName: "SW 7011 Natural Choice",
    colorCode: "rgb(227, 222, 208)",
  },
  {
    colorName: "SW 7647 Crushed Ice",
    colorCode: "rgb(214, 211, 204)",
  },
  {
    colorName: "SW 7646 First Star",
    colorCode: "rgb(218, 217, 212)",
  },
  {
    colorName: "SW 6231 Rock Candy",
    colorCode: "rgb(222, 225, 223)",
  },
  {
    colorName: "SW 6168 Moderne White",
    colorCode: "rgb(226, 224, 215)",
  },
  {
    colorName: "SW 7631 City Loft",
    colorCode: "rgb(223, 218, 209)",
  },
  {
    colorName: "SW 6035 Gauzy White",
    colorCode: "rgb(227, 219, 212)",
  },
  {
    colorName: "SW 7637 Oyster White",
    colorCode: "rgb(226, 221, 208)",
  },
  {
    colorName: "SW 7671 On the Rocks",
    colorCode: "rgb(208, 206, 200)",
  },
  {
    colorName: "SW 7648 Big Chill",
    colorCode: "rgb(208, 206, 201)",
  },
  {
    colorName: "SW 7070 Site White",
    colorCode: "rgb(220, 222, 220)",
  },
  {
    colorName: "SW 7049 Nuance",
    colorCode: "rgb(226, 224, 214)",
  },
  {
    colorName: "SW 7628 Windfresh White",
    colorCode: "rgb(222, 216, 207)",
  },
  {
    colorName: "SW 7021 Simple White",
    colorCode: "rgb(223, 217, 210)",
  },
  {
    colorName: "SW 6288 Rosebud",
    colorCode: "rgb(224, 205, 209)",
  },
  {
    colorName: "SW 6295 Demure",
    colorCode: "rgb(232, 212, 213)",
  },
  {
    colorName: "SW 6302 Innocence",
    colorCode: "rgb(235, 209, 207)",
  },
  {
    colorName: "SW 6309 Charming Pink",
    colorCode: "rgb(237, 211, 210)",
  },
  {
    colorName: "SW 6316 Rosy Outlook",
    colorCode: "rgb(235, 206, 203)",
  },
  {
    colorName: "SW 6323 Romance",
    colorCode: "rgb(235, 207, 195)",
  },
  {
    colorName: "SW 6330 Quaint Peche",
    colorCode: "rgb(234, 205, 193)",
  },
  {
    colorName: "SW 6289 Delightful",
    colorCode: "rgb(210, 182, 190)",
  },
  {
    colorName: "SW 6296 Fading Rose",
    colorCode: "rgb(218, 189, 193)",
  },
  {
    colorName: "SW 6303 Rose Colored",
    colorCode: "rgb(220, 182, 181)",
  },
  {
    colorName: "SW 6310 Lotus Flower",
    colorCode: "rgb(230, 189, 189)",
  },
  {
    colorName: "SW 6317 Gracious Rose",
    colorCode: "rgb(227, 183, 177)",
  },
  {
    colorName: "SW 6324 Mellow Coral",
    colorCode: "rgb(227, 181, 168)",
  },
  {
    colorName: "SW 6331 Smoky Salmon",
    colorCode: "rgb(226, 182, 167)",
  },
  {
    colorName: "SW 6290 Rosé",
    colorCode: "rgb(185, 149, 161)",
  },
  {
    colorName: "SW 6297 Rose Embroidery",
    colorCode: "rgb(199, 158, 162)",
  },
  {
    colorName: "SW 6304 Pressed Flower",
    colorCode: "rgb(195, 147, 147)",
  },
  {
    colorName: "SW 6311 Memorable Rose",
    colorCode: "rgb(207, 138, 141)",
  },
  {
    colorName: "SW 6318 Resounding Rose",
    colorCode: "rgb(205, 142, 137)",
  },
  {
    colorName: "SW 6325 Constant Coral",
    colorCode: "rgb(205, 142, 127)",
  },
  {
    colorName: "SW 6332 Coral Island",
    colorCode: "rgb(206, 147, 130)",
  },
  {
    colorName: "SW 6291 Moss Rose",
    colorCode: "rgb(158, 109, 121)",
  },
  {
    colorName: "SW 9001 Audrey's Blush",
    colorCode: "rgb(174, 128, 135)",
  },
  {
    colorName: "SW 9002 Carley's Rose",
    colorCode: "rgb(168, 115, 118)",
  },
  {
    colorName: "SW 9003 Rita's Rouge",
    colorCode: "rgb(186, 113, 118)",
  },
  {
    colorName: "SW 9004 Coral Rose",
    colorCode: "rgb(195, 127, 122)",
  },
  {
    colorName: "SW 9005 Coral Clay",
    colorCode: "rgb(191, 121, 110)",
  },
  {
    colorName: "SW 9006 Rojo Dust",
    colorCode: "rgb(181, 116, 102)",
  },
  {
    colorName: "SW 6292 Berry Bush",
    colorCode: "rgb(141, 88, 105)",
  },
  {
    colorName: "SW 6298 Concerto",
    colorCode: "rgb(158, 107, 117)",
  },
  {
    colorName: "SW 6305 Rambling Rose",
    colorCode: "rgb(153, 93, 98)",
  },
  {
    colorName: "SW 6312 Redbud",
    colorCode: "rgb(173, 94, 101)",
  },
  {
    colorName: "SW 6319 Reddish",
    colorCode: "rgb(181, 105, 102)",
  },
  {
    colorName: "SW 6326 Henna Shade",
    colorCode: "rgb(179, 103, 93)",
  },
  {
    colorName: "SW 6333 Foxy",
    colorCode: "rgb(168, 94, 83)",
  },
  {
    colorName: "SW 6293 Fabulous Grape",
    colorCode: "rgb(109, 52, 79)",
  },
  {
    colorName: "SW 6299 Aged Wine",
    colorCode: "rgb(137, 84, 96)",
  },
  {
    colorName: "SW 6306 Cordial",
    colorCode: "rgb(134, 76, 82)",
  },
  {
    colorName: "SW 6313 Kirsch Red",
    colorCode: "rgb(151, 73, 83)",
  },
  {
    colorName: "SW 6320 Bravado Red",
    colorCode: "rgb(160, 82, 78)",
  },
  {
    colorName: "SW 6327 Bold Brick",
    colorCode: "rgb(160, 88, 79)",
  },
  {
    colorName: "SW 6334 Flower Pot",
    colorCode: "rgb(143, 68, 56)",
  },
  {
    colorName: "SW 7577 Blackberry",
    colorCode: "rgb(83, 54, 64)",
  },
  {
    colorName: "SW 6300 Burgundy",
    colorCode: "rgb(99, 51, 62)",
  },
  {
    colorName: "SW 6307 Fine Wine",
    colorCode: "rgb(114, 57, 65)",
  },
  {
    colorName: "SW 6314 Luxurious Red",
    colorCode: "rgb(134, 58, 66)",
  },
  {
    colorName: "SW 6321 Red Bay",
    colorCode: "rgb(142, 55, 56)",
  },
  {
    colorName: "SW 6328 Fireweed",
    colorCode: "rgb(123, 55, 48)",
  },
  {
    colorName: "SW 6335 Fired Brick",
    colorCode: "rgb(131, 56, 42)",
  },
  {
    colorName: "SW 6337 Spun Sugar",
    colorCode: "rgb(237, 210, 192)",
  },
  {
    colorName: "SW 6344 Peach Fuzz",
    colorCode: "rgb(236, 207, 187)",
  },
  {
    colorName: "SW 6351 Sweet Orange",
    colorCode: "rgb(235, 204, 179)",
  },
  {
    colorName: "SW 6358 Creamery",
    colorCode: "rgb(237, 208, 182)",
  },
  {
    colorName: "SW 6365 Cachet Cream",
    colorCode: "rgb(243, 217, 186)",
  },
  {
    colorName: "SW 6372 Inviting Ivory",
    colorCode: "rgb(242, 213, 176)",
  },
  {
    colorName: "SW 6379 Jersey Cream",
    colorCode: "rgb(245, 222, 187)",
  },
  {
    colorName: "SW 6338 Warming Peach",
    colorCode: "rgb(228, 185, 162)",
  },
  {
    colorName: "SW 6345 Sumptuous Peach",
    colorCode: "rgb(229, 185, 155)",
  },
  {
    colorName: "SW 6352 Soft Apricot",
    colorCode: "rgb(224, 179, 146)",
  },
  {
    colorName: "SW 6359 Sociable",
    colorCode: "rgb(232, 190, 155)",
  },
  {
    colorName: "SW 6366 Ambitious Amber",
    colorCode: "rgb(240, 203, 151)",
  },
  {
    colorName: "SW 6373 Harvester",
    colorCode: "rgb(237, 195, 142)",
  },
  {
    colorName: "SW 6380 Humble Gold",
    colorCode: "rgb(237, 199, 150)",
  },
  {
    colorName: "SW 6339 Persimmon",
    colorCode: "rgb(217, 152, 124)",
  },
  {
    colorName: "SW 6346 Fame Orange",
    colorCode: "rgb(219, 156, 123)",
  },
  {
    colorName: "SW 9010 Windswept Canyon",
    colorCode: "rgb(219, 164, 128)",
  },
  {
    colorName: "SW 9011 Sun Bleached Ochre",
    colorCode: "rgb(227, 171, 123)",
  },
  {
    colorName: "SW 6367 Viva Gold",
    colorCode: "rgb(227, 172, 114)",
  },
  {
    colorName: "SW 9012 Polvo de Oro",
    colorCode: "rgb(232, 184, 127)",
  },
  {
    colorName: "SW 7682 Bee's Wax",
    colorCode: "rgb(234, 191, 134)",
  },
  {
    colorName: "SW 9009 Subdued Sienna",
    colorCode: "rgb(204, 137, 108)",
  },
  {
    colorName: "SW 6347 Chrysanthemum",
    colorCode: "rgb(196, 123, 91)",
  },
  {
    colorName: "SW 6353 Chivalry Copper",
    colorCode: "rgb(212, 150, 110)",
  },
  {
    colorName: "SW 6360 Folksy Gold",
    colorCode: "rgb(214, 153, 105)",
  },
  {
    colorName: "SW 6368 Bakelite Gold",
    colorCode: "rgb(215, 153, 93)",
  },
  {
    colorName: "SW 6374 Torchlight",
    colorCode: "rgb(229, 174, 107)",
  },
  {
    colorName: "SW 6381 Anjou Pear",
    colorCode: "rgb(221, 172, 109)",
  },
  {
    colorName: "SW 6340 Baked Clay",
    colorCode: "rgb(193, 120, 92)",
  },
  {
    colorName: "SW 6348 Reynard",
    colorCode: "rgb(180, 104, 72)",
  },
  {
    colorName: "SW 6354 Armagnac",
    colorCode: "rgb(195, 128, 88)",
  },
  {
    colorName: "SW 6361 Autumnal",
    colorCode: "rgb(205, 140, 93)",
  },
  {
    colorName: "SW 6369 Tassel",
    colorCode: "rgb(198, 136, 74)",
  },
  {
    colorName: "SW 6375 Honeycomb",
    colorCode: "rgb(213, 152, 88)",
  },
  {
    colorName: "SW 6382 Ceremonial Gold",
    colorCode: "rgb(214, 158, 89)",
  },
  {
    colorName: "SW 6341 Red Cent",
    colorCode: "rgb(173, 101, 76)",
  },
  {
    colorName: "SW 6349 Pennywise",
    colorCode: "rgb(162, 88, 58)",
  },
  {
    colorName: "SW 6355 Truepenny",
    colorCode: "rgb(180, 108, 66)",
  },
  {
    colorName: "SW 6362 Tigereye",
    colorCode: "rgb(187, 119, 72)",
  },
  {
    colorName: "SW 6370 Saucy Gold",
    colorCode: "rgb(182, 116, 59)",
  },
  {
    colorName: "SW 6376 Gold Coast",
    colorCode: "rgb(199, 133, 56)",
  },
  {
    colorName: "SW 6383 Golden Rule",
    colorCode: "rgb(204, 146, 73)",
  },
  {
    colorName: "SW 6342 Spicy Hue",
    colorCode: "rgb(153, 75, 53)",
  },
  {
    colorName: "SW 7598 Sierra Redwood",
    colorCode: "rgb(146, 78, 60)",
  },
  {
    colorName: "SW 6356 Copper Mountain",
    colorCode: "rgb(166, 97, 60)",
  },
  {
    colorName: "SW 6363 Gingery",
    colorCode: "rgb(176, 108, 62)",
  },
  {
    colorName: "SW 7709 Copper Pot",
    colorCode: "rgb(177, 106, 55)",
  },
  {
    colorName: "SW 6377 Butterscotch",
    colorCode: "rgb(182, 125, 60)",
  },
  {
    colorName: "SW 6384 Cut the Mustard",
    colorCode: "rgb(186, 127, 56)",
  },
  {
    colorName: "SW 6386 Napery",
    colorCode: "rgb(239, 221, 193)",
  },
  {
    colorName: "SW 6127 Ivoire",
    colorCode: "rgb(228, 206, 172)",
  },
  {
    colorName: "SW 6120 Believable Buff",
    colorCode: "rgb(219, 199, 168)",
  },
  {
    colorName: "SW 6393 Convivial Yellow",
    colorCode: "rgb(233, 214, 176)",
  },
  {
    colorName: "SW 6400 Lucent Yellow",
    colorCode: "rgb(228, 208, 165)",
  },
  {
    colorName: "SW 6407 Ancestral Gold",
    colorCode: "rgb(221, 205, 166)",
  },
  {
    colorName: "SW 6414 Rice Paddy",
    colorCode: "rgb(223, 212, 176)",
  },
  {
    colorName: "SW 6387 Compatible Cream",
    colorCode: "rgb(232, 200, 158)",
  },
  {
    colorName: "SW 6128 Blonde",
    colorCode: "rgb(220, 189, 146)",
  },
  {
    colorName: "SW 6121 Whole Wheat",
    colorCode: "rgb(205, 181, 146)",
  },
  {
    colorName: "SW 6394 Sequin",
    colorCode: "rgb(225, 194, 141)",
  },
  {
    colorName: "SW 9027 Pale Moss",
    colorCode: "rgb(220, 199, 151)",
  },
  {
    colorName: "SW 6408 Wheat Grass",
    colorCode: "rgb(203, 181, 132)",
  },
  {
    colorName: "SW 6415 Hearts of Palm",
    colorCode: "rgb(207, 194, 145)",
  },
  {
    colorName: "SW 9023 Dakota Wheat",
    colorCode: "rgb(225, 189, 142)",
  },
  {
    colorName: "SW 6129 Restrained Gold",
    colorCode: "rgb(210, 176, 132)",
  },
  {
    colorName: "SW 6122 Camelback",
    colorCode: "rgb(197, 170, 133)",
  },
  {
    colorName: "SW 9026 Tarnished Trumpet",
    colorCode: "rgb(213, 177, 118)",
  },
  {
    colorName: "SW 6401 Independent Gold",
    colorCode: "rgb(210, 186, 131)",
  },
  {
    colorName: "SW 9028 Dusted Olive",
    colorCode: "rgb(190, 167, 117)",
  },
  {
    colorName: "SW 9029 Cool Avocado",
    colorCode: "rgb(196, 180, 125)",
  },
  {
    colorName: "SW 6388 Golden Fleece",
    colorCode: "rgb(214, 173, 120)",
  },
  {
    colorName: "SW 9024 Vintage Gold",
    colorCode: "rgb(203, 165, 118)",
  },
  {
    colorName: "SW 9025 Coriander Powder",
    colorCode: "rgb(186, 156, 117)",
  },
  {
    colorName: "SW 6395 Alchemy",
    colorCode: "rgb(201, 158, 83)",
  },
  {
    colorName: "SW 6402 Antiquity",
    colorCode: "rgb(194, 164, 98)",
  },
  {
    colorName: "SW 6409 Edgy Gold",
    colorCode: "rgb(177, 151, 95)",
  },
  {
    colorName: "SW 6416 Sassy Green",
    colorCode: "rgb(187, 168, 106)",
  },
  {
    colorName: "SW 6389 Butternut",
    colorCode: "rgb(204, 155, 92)",
  },
  {
    colorName: "SW 6130 Mannered Gold",
    colorCode: "rgb(193, 151, 99)",
  },
  {
    colorName: "SW 6123 Baguette",
    colorCode: "rgb(179, 145, 103)",
  },
  {
    colorName: "SW 6396 Different Gold",
    colorCode: "rgb(188, 147, 77)",
  },
  {
    colorName: "SW 6403 Escapade Gold",
    colorCode: "rgb(184, 155, 89)",
  },
  {
    colorName: "SW 6410 Brassy",
    colorCode: "rgb(157, 131, 68)",
  },
  {
    colorName: "SW 6417 Tupelo Tree",
    colorCode: "rgb(156, 145, 82)",
  },
  {
    colorName: "SW 6390 Bosc Pear",
    colorCode: "rgb(192, 144, 86)",
  },
  {
    colorName: "SW 6131 Chamois",
    colorCode: "rgb(173, 132, 81)",
  },
  {
    colorName: "SW 6124 Cardboard",
    colorCode: "rgb(156, 122, 86)",
  },
  {
    colorName: "SW 6397 Nankeen",
    colorCode: "rgb(170, 128, 58)",
  },
  {
    colorName: "SW 6404 Grandiose",
    colorCode: "rgb(156, 127, 65)",
  },
  {
    colorName: "SW 6411 Bengal Grass",
    colorCode: "rgb(142, 119, 63)",
  },
  {
    colorName: "SW 6418 Rural Green",
    colorCode: "rgb(141, 132, 77)",
  },
  {
    colorName: "SW 6391 Gallant Gold",
    colorCode: "rgb(164, 118, 60)",
  },
  {
    colorName: "SW 6132 Relic Bronze",
    colorCode: "rgb(144, 106, 58)",
  },
  {
    colorName: "SW 6125 Craft Paper",
    colorCode: "rgb(138, 102, 69)",
  },
  {
    colorName: "SW 6398 Sconce Gold",
    colorCode: "rgb(153, 111, 50)",
  },
  {
    colorName: "SW 6405 Fervent Brass",
    colorCode: "rgb(149, 121, 61)",
  },
  {
    colorName: "SW 6412 Eminent Bronze",
    colorCode: "rgb(122, 104, 65)",
  },
  {
    colorName: "SW 6419 Saguaro",
    colorCode: "rgb(101, 95, 45)",
  },
  {
    colorName: "SW 6421 Celery",
    colorCode: "rgb(224, 221, 189)",
  },
  {
    colorName: "SW 6428 Honeydew",
    colorCode: "rgb(219, 221, 189)",
  },
  {
    colorName: "SW 6435 Gratifying Green",
    colorCode: "rgb(218, 226, 205)",
  },
  {
    colorName: "SW 6442 Supreme Green",
    colorCode: "rgb(207, 221, 199)",
  },
  {
    colorName: "SW 6449 Topiary Tint",
    colorCode: "rgb(200, 216, 196)",
  },
  {
    colorName: "SW 6456 Slow Green",
    colorCode: "rgb(198, 213, 201)",
  },
  {
    colorName: "SW 6463 Breaktime",
    colorCode: "rgb(196, 217, 206)",
  },
  {
    colorName: "SW 6422 Shagreen",
    colorCode: "rgb(203, 201, 157)",
  },
  {
    colorName: "SW 6429 Baize Green",
    colorCode: "rgb(199, 205, 168)",
  },
  {
    colorName: "SW 6436 Bonsai Tint",
    colorCode: "rgb(197, 209, 178)",
  },
  {
    colorName: "SW 6443 Relish",
    colorCode: "rgb(179, 203, 170)",
  },
  {
    colorName: "SW 6450 Easy Green",
    colorCode: "rgb(172, 194, 168)",
  },
  {
    colorName: "SW 6457 Kind Green",
    colorCode: "rgb(170, 194, 179)",
  },
  {
    colorName: "SW 6464 Aloe",
    colorCode: "rgb(172, 202, 188)",
  },
  {
    colorName: "SW 9037 Baby Bok Choy",
    colorCode: "rgb(187, 185, 138)",
  },
  {
    colorName: "SW 6430 Great Green",
    colorCode: "rgb(171, 180, 134)",
  },
  {
    colorName: "SW 6437 Haven",
    colorCode: "rgb(163, 180, 140)",
  },
  {
    colorName: "SW 6444 Lounge Green",
    colorCode: "rgb(139, 169, 127)",
  },
  {
    colorName: "SW 6451 Nurture Green",
    colorCode: "rgb(152, 176, 146)",
  },
  {
    colorName: "SW 6458 Restful",
    colorCode: "rgb(145, 175, 157)",
  },
  {
    colorName: "SW 6465 Spearmint",
    colorCode: "rgb(148, 181, 166)",
  },
  {
    colorName: "SW 6423 Ryegrass",
    colorCode: "rgb(174, 172, 122)",
  },
  {
    colorName: "SW 9038 Cucuzza Verde",
    colorCode: "rgb(155, 163, 115)",
  },
  {
    colorName: "SW 9039 Broccoflower",
    colorCode: "rgb(143, 162, 119)",
  },
  {
    colorName: "SW 9040 Reseda Green",
    colorCode: "rgb(117, 148, 107)",
  },
  {
    colorName: "SW 7742 Agate Green",
    colorCode: "rgb(142, 164, 134)",
  },
  {
    colorName: "SW 9041 Parisian Patina",
    colorCode: "rgb(125, 155, 137)",
  },
  {
    colorName: "SW 9042 Verdigreen",
    colorCode: "rgb(129, 165, 149)",
  },
  {
    colorName: "SW 6424 Tansy Green",
    colorCode: "rgb(149, 148, 92)",
  },
  {
    colorName: "SW 6431 Leapfrog",
    colorCode: "rgb(136, 145, 93)",
  },
  {
    colorName: "SW 6438 Dill",
    colorCode: "rgb(120, 141, 96)",
  },
  {
    colorName: "SW 6445 Garden Grove",
    colorCode: "rgb(94, 127, 87)",
  },
  {
    colorName: "SW 6452 Inland",
    colorCode: "rgb(108, 136, 103)",
  },
  {
    colorName: "SW 6459 Jadite",
    colorCode: "rgb(97, 130, 108)",
  },
  {
    colorName: "SW 6466 Grandview",
    colorCode: "rgb(107, 146, 127)",
  },
  {
    colorName: "SW 6425 Relentless Olive",
    colorCode: "rgb(113, 113, 62)",
  },
  {
    colorName: "SW 6432 Garden Spot",
    colorCode: "rgb(109, 118, 69)",
  },
  {
    colorName: "SW 6439 Greenfield",
    colorCode: "rgb(96, 114, 79)",
  },
  {
    colorName: "SW 6446 Arugula",
    colorCode: "rgb(66, 96, 60)",
  },
  {
    colorName: "SW 6453 Cilantro",
    colorCode: "rgb(83, 113, 80)",
  },
  {
    colorName: "SW 6460 Kale Green",
    colorCode: "rgb(79, 106, 86)",
  },
  {
    colorName: "SW 6467 Kendal Green",
    colorCode: "rgb(84, 120, 103)",
  },
  {
    colorName: "SW 6426 Basque Green",
    colorCode: "rgb(95, 96, 51)",
  },
  {
    colorName: "SW 6433 Inverness",
    colorCode: "rgb(87, 98, 56)",
  },
  {
    colorName: "SW 6440 Courtyard",
    colorCode: "rgb(71, 88, 66)",
  },
  {
    colorName: "SW 6447 Evergreens",
    colorCode: "rgb(64, 88, 64)",
  },
  {
    colorName: "SW 6454 Shamrock",
    colorCode: "rgb(32, 81, 52)",
  },
  {
    colorName: "SW 6461 Isle of Pines",
    colorCode: "rgb(61, 85, 65)",
  },
  {
    colorName: "SW 6468 Hunt Club",
    colorCode: "rgb(42, 79, 67)",
  },
  {
    colorName: "SW 6470 Waterscape",
    colorCode: "rgb(191, 210, 201)",
  },
  {
    colorName: "SW 6477 Tidewater",
    colorCode: "rgb(195, 215, 211)",
  },
  {
    colorName: "SW 6484 Meander Blue",
    colorCode: "rgb(190, 219, 216)",
  },
  {
    colorName: "SW 6491 Open Air",
    colorCode: "rgb(199, 223, 224)",
  },
  {
    colorName: "SW 9054 Little Boy Blu",
    colorCode: "rgb(199, 216, 219)",
  },
  {
    colorName: "SW 6498 Byte Blue",
    colorCode: "rgb(197, 220, 224)",
  },
  {
    colorName: "SW 6505 Atmospheric",
    colorCode: "rgb(194, 218, 224)",
  },
  {
    colorName: "SW 6471 Hazel",
    colorCode: "rgb(168, 193, 183)",
  },
  {
    colorName: "SW 6478 Watery",
    colorCode: "rgb(180, 204, 201)",
  },
  {
    colorName: "SW 6485 Raindrop",
    colorCode: "rgb(158, 198, 198)",
  },
  {
    colorName: "SW 6492 Jetstream",
    colorCode: "rgb(176, 210, 214)",
  },
  {
    colorName: "SW 9055 Billowy Breeze",
    colorCode: "rgb(175, 199, 205)",
  },
  {
    colorName: "SW 6499 Stream",
    colorCode: "rgb(173, 204, 211)",
  },
  {
    colorName: "SW 6506 Vast Sky",
    colorCode: "rgb(169, 201, 215)",
  },
  {
    colorName: "SW 9050 Vintage Vessel",
    colorCode: "rgb(148, 178, 166)",
  },
  {
    colorName: "SW 9051 Aquaverde",
    colorCode: "rgb(163, 192, 189)",
  },
  {
    colorName: "SW 9052 Blithe Blue",
    colorCode: "rgb(144, 189, 189)",
  },
  {
    colorName: "SW 9053 Agua Fría",
    colorCode: "rgb(159, 197, 204)",
  },
  {
    colorName: "SW 9056 French Moire",
    colorCode: "rgb(159, 187, 195)",
  },
  {
    colorName: "SW 9061 Rest Assured",
    colorCode: "rgb(155, 191, 201)",
  },
  {
    colorName: "SW 6507 Resolute Blue",
    colorCode: "rgb(133, 176, 196)",
  },
  {
    colorName: "SW 6472 Composed",
    colorCode: "rgb(126, 162, 152)",
  },
  {
    colorName: "SW 6479 Drizzle",
    colorCode: "rgb(140, 174, 171)",
  },
  {
    colorName: "SW 6486 Reflecting Pool",
    colorCode: "rgb(123, 177, 178)",
  },
  {
    colorName: "SW 6493 Ebbtide",
    colorCode: "rgb(132, 180, 190)",
  },
  {
    colorName: "SW 9057 Aquitaine",
    colorCode: "rgb(136, 171, 180)",
  },
  {
    colorName: "SW 6500 Open Seas",
    colorCode: "rgb(131, 175, 188)",
  },
  {
    colorName: "SW 9062 Bluebird Feather",
    colorCode: "rgb(111, 157, 179)",
  },
  {
    colorName: "SW 6473 Surf Green",
    colorCode: "rgb(95, 136, 125)",
  },
  {
    colorName: "SW 6480 Lagoon",
    colorCode: "rgb(81, 134, 130)",
  },
  {
    colorName: "SW 6487 Cloudburst",
    colorCode: "rgb(92, 149, 152)",
  },
  {
    colorName: "SW 6494 Lakeshore",
    colorCode: "rgb(91, 150, 162)",
  },
  {
    colorName: "SW 9058 Secret Cove",
    colorCode: "rgb(104, 144, 157)",
  },
  {
    colorName: "SW 6501 Manitou Blue",
    colorCode: "rgb(91, 146, 162)",
  },
  {
    colorName: "SW 6508 Secure Blue",
    colorCode: "rgb(83, 137, 161)",
  },
  {
    colorName: "SW 6474 Raging Sea",
    colorCode: "rgb(71, 111, 101)",
  },
  {
    colorName: "SW 6481 Green Bay",
    colorCode: "rgb(46, 104, 100)",
  },
  {
    colorName: "SW 6488 Grand Canal",
    colorCode: "rgb(60, 121, 125)",
  },
  {
    colorName: "SW 6495 Great Falls",
    colorCode: "rgb(33, 119, 134)",
  },
  {
    colorName: "SW 9059 Silken Peacock",
    colorCode: "rgb(66, 117, 132)",
  },
  {
    colorName: "SW 6502 Loch Blue",
    colorCode: "rgb(47, 119, 139)",
  },
  {
    colorName: "SW 6509 Georgian Bay",
    colorCode: "rgb(34, 101, 127)",
  },
  {
    colorName: "SW 6475 Country Squire",
    colorCode: "rgb(18, 74, 66)",
  },
  {
    colorName: "SW 6482 Cape Verde",
    colorCode: "rgb(1, 85, 79)",
  },
  {
    colorName: "SW 6489 Really Teal",
    colorCode: "rgb(1, 99, 103)",
  },
  {
    colorName: "SW 6496 Oceanside",
    colorCode: "rgb(1, 90, 107)",
  },
  {
    colorName: "SW 9060 Connor's Lakefront",
    colorCode: "rgb(23, 90, 108)",
  },
  {
    colorName: "SW 6503 Bosporus",
    colorCode: "rgb(1, 93, 117)",
  },
  {
    colorName: "SW 6510 Loyal Blue",
    colorCode: "rgb(1, 69, 94)",
  },
  {
    colorName: "SW 6512 Balmy",
    colorCode: "rgb(197, 216, 222)",
  },
  {
    colorName: "SW 6519 Hinting Blue",
    colorCode: "rgb(206, 217, 221)",
  },
  {
    colorName: "SW 6533 Mild Blue",
    colorCode: "rgb(203, 213, 219)",
  },
  {
    colorName: "SW 6540 Starry Night",
    colorCode: "rgb(214, 217, 222)",
  },
  {
    colorName: "SW 6547 Silver Peony",
    colorCode: "rgb(218, 214, 219)",
  },
  {
    colorName: "SW 6554 Lite Lavender",
    colorCode: "rgb(224, 218, 223)",
  },
  {
    colorName: "SW 6281 Wallflower",
    colorCode: "rgb(219, 207, 212)",
  },
  {
    colorName: "SW 6513 Take Five",
    colorCode: "rgb(179, 201, 211)",
  },
  {
    colorName: "SW 6520 Honest Blue",
    colorCode: "rgb(178, 199, 211)",
  },
  {
    colorName: "SW 6534 Icy",
    colorCode: "rgb(187, 199, 210)",
  },
  {
    colorName: "SW 6541 Daydream",
    colorCode: "rgb(189, 195, 205)",
  },
  {
    colorName: "SW 6548 Grape Mist",
    colorCode: "rgb(197, 192, 201)",
  },
  {
    colorName: "SW 6555 Enchant",
    colorCode: "rgb(209, 198, 210)",
  },
  {
    colorName: "SW 6282 Mauve Finery",
    colorCode: "rgb(203, 184, 192)",
  },
  {
    colorName: "SW 6514 Respite",
    colorCode: "rgb(151, 180, 195)",
  },
  {
    colorName: "SW 6521 Notable Hue",
    colorCode: "rgb(139, 167, 187)",
  },
  {
    colorName: "SW 6535 Solitude",
    colorCode: "rgb(153, 167, 184)",
  },
  {
    colorName: "SW 6542 Vesper Violet",
    colorCode: "rgb(153, 160, 178)",
  },
  {
    colorName: "SW 6549 Ash Violet",
    colorCode: "rgb(162, 155, 170)",
  },
  {
    colorName: "SW 6556 Obi Lilac",
    colorCode: "rgb(176, 163, 182)",
  },
  {
    colorName: "SW 6283 Thistle",
    colorCode: "rgb(170, 142, 154)",
  },
  {
    colorName: "SW 9070 Baby Blue Eyes",
    colorCode: "rgb(131, 162, 180)",
  },
  {
    colorName: "SW 9071 Dyer's Woad",
    colorCode: "rgb(123, 153, 176)",
  },
  {
    colorName: "SW 9072 Dried Lavender",
    colorCode: "rgb(133, 149, 170)",
  },
  {
    colorName: "SW 9073 Dusty Heather",
    colorCode: "rgb(137, 144, 163)",
  },
  {
    colorName: "SW 9074 Gentle Grape",
    colorCode: "rgb(144, 138, 155)",
  },
  {
    colorName: "SW 9075 Berry Cream",
    colorCode: "rgb(154, 140, 162)",
  },
  {
    colorName: "SW 9076 Ruby Violet",
    colorCode: "rgb(155, 126, 139)",
  },
  {
    colorName: "SW 6515 Leisure Blue",
    colorCode: "rgb(106, 142, 161)",
  },
  {
    colorName: "SW 6522 Sporty Blue",
    colorCode: "rgb(106, 138, 164)",
  },
  {
    colorName: "SW 6536 Searching Blue",
    colorCode: "rgb(108, 127, 154)",
  },
  {
    colorName: "SW 6543 Soulful Blue",
    colorCode: "rgb(117, 124, 145)",
  },
  {
    colorName: "SW 6550 Mythical",
    colorCode: "rgb(126, 119, 142)",
  },
  {
    colorName: "SW 6557 Wood Violet",
    colorCode: "rgb(122, 107, 133)",
  },
  {
    colorName: "SW 6284 Plum Dandy",
    colorCode: "rgb(139, 104, 120)",
  },
  {
    colorName: "SW 6516 Down Pour",
    colorCode: "rgb(67, 113, 139)",
  },
  {
    colorName: "SW 6523 Denim",
    colorCode: "rgb(80, 107, 132)",
  },
  {
    colorName: "SW 6537 Luxe Blue",
    colorCode: "rgb(81, 101, 130)",
  },
  {
    colorName: "SW 6544 Mesmerize",
    colorCode: "rgb(93, 101, 123)",
  },
  {
    colorName: "SW 6551 Purple Passage",
    colorCode: "rgb(100, 94, 119)",
  },
  {
    colorName: "SW 6558 Plummy",
    colorCode: "rgb(103, 90, 117)",
  },
  {
    colorName: "SW 6285 Grape Harvest",
    colorCode: "rgb(126, 90, 109)",
  },
  {
    colorName: "SW 6517 Regatta",
    colorCode: "rgb(33, 87, 114)",
  },
  {
    colorName: "SW 6524 Commodore",
    colorCode: "rgb(37, 71, 106)",
  },
  {
    colorName: "SW 6538 Dignified",
    colorCode: "rgb(59, 73, 109)",
  },
  {
    colorName: "SW 6545 Majestic Purple",
    colorCode: "rgb(59, 60, 90)",
  },
  {
    colorName: "SW 6552 Dewberry",
    colorCode: "rgb(62, 56, 90)",
  },
  {
    colorName: "SW 6559 Concord Grape",
    colorCode: "rgb(68, 55, 87)",
  },
  {
    colorName: "SW 6286 Mature Grape",
    colorCode: "rgb(95, 63, 84)",
  },
  {
    colorName: "SW 6001 Grayish",
    colorCode: "rgb(207, 202, 199)",
  },
  {
    colorName: "SW 7022 Alpaca",
    colorCode: "rgb(204, 197, 189)",
  },
  {
    colorName: "SW 6071 Popular Gray",
    colorCode: "rgb(212, 204, 195)",
  },
  {
    colorName: "SW 7029 Agreeable Gray",
    colorCode: "rgb(209, 203, 193)",
  },
  {
    colorName: "SW 7015 Repose Gray",
    colorCode: "rgb(204, 201, 192)",
  },
  {
    colorName: "SW 7043 Worldly Gray",
    colorCode: "rgb(206, 198, 187)",
  },
  {
    colorName: "SW 7050 Useful Gray",
    colorCode: "rgb(207, 202, 189)",
  },
  {
    colorName: "SW 6002 Essential Gray",
    colorCode: "rgb(188, 184, 182)",
  },
  {
    colorName: "SW 7023 Requisite Gray",
    colorCode: "rgb(185, 178, 169)",
  },
  {
    colorName: "SW 6072 Versatile Gray",
    colorCode: "rgb(193, 182, 171)",
  },
  {
    colorName: "SW 7030 Anew Gray",
    colorCode: "rgb(191, 182, 170)",
  },
  {
    colorName: "SW 7016 Mindful Gray",
    colorCode: "rgb(188, 183, 173)",
  },
  {
    colorName: "SW 7044 Amazing Gray",
    colorCode: "rgb(190, 181, 169)",
  },
  {
    colorName: "SW 7051 Analytical Gray",
    colorCode: "rgb(191, 182, 167)",
  },
  {
    colorName: "SW 6003 Proper Gray",
    colorCode: "rgb(173, 168, 165)",
  },
  {
    colorName: "SW 7024 Functional Gray",
    colorCode: "rgb(171, 163, 154)",
  },
  {
    colorName: "SW 6073 Perfect Greige",
    colorCode: "rgb(183, 171, 159)",
  },
  {
    colorName: "SW 7031 Mega Greige",
    colorCode: "rgb(173, 162, 149)",
  },
  {
    colorName: "SW 7017 Dorian Gray",
    colorCode: "rgb(172, 167, 158)",
  },
  {
    colorName: "SW 7045 Intellectual Gray",
    colorCode: "rgb(168, 160, 147)",
  },
  {
    colorName: "SW 7052 Gray Area",
    colorCode: "rgb(175, 166, 150)",
  },
  {
    colorName: "SW 9167 Polished Concrete",
    colorCode: "rgb(158, 151, 147)",
  },
  {
    colorName: "SW 9168 Elephant Ear",
    colorCode: "rgb(152, 143, 133)",
  },
  {
    colorName: "SW 9169 Chatura Gray",
    colorCode: "rgb(160, 146, 135)",
  },
  {
    colorName: "SW 7504 Keystone Gray",
    colorCode: "rgb(158, 146, 132)",
  },
  {
    colorName: "SW 9170 Acier",
    colorCode: "rgb(158, 153, 145)",
  },
  {
    colorName: "SW 9171 Felted Wool",
    colorCode: "rgb(151, 144, 131)",
  },
  {
    colorName: "SW 9172 Studio Clay",
    colorCode: "rgb(149, 141, 127)",
  },
  {
    colorName: "SW 6004 Mink",
    colorCode: "rgb(132, 123, 119)",
  },
  {
    colorName: "SW 7025 Backdrop",
    colorCode: "rgb(134, 122, 111)",
  },
  {
    colorName: "SW 6074 Spalding Gray",
    colorCode: "rgb(141, 127, 117)",
  },
  {
    colorName: "SW 7032 Warm Stone",
    colorCode: "rgb(136, 123, 108)",
  },
  {
    colorName: "SW 7018 Dovetail",
    colorCode: "rgb(144, 138, 131)",
  },
  {
    colorName: "SW 7046 Anonymous",
    colorCode: "rgb(129, 122, 110)",
  },
  {
    colorName: "SW 7053 Adaptive Shade",
    colorCode: "rgb(134, 126, 112)",
  },
  {
    colorName: "SW 6005 Folkstone",
    colorCode: "rgb(109, 101, 98)",
  },
  {
    colorName: "SW 7026 Griffin",
    colorCode: "rgb(111, 100, 89)",
  },
  {
    colorName: "SW 6075 Garret Gray",
    colorCode: "rgb(117, 104, 97)",
  },
  {
    colorName: "SW 7033 Brainstorm Bronze",
    colorCode: "rgb(116, 104, 90)",
  },
  {
    colorName: "SW 7019 Gauntlet Gray",
    colorCode: "rgb(120, 115, 110)",
  },
  {
    colorName: "SW 7047 Porpoise",
    colorCode: "rgb(107, 100, 91)",
  },
  {
    colorName: "SW 7054 Suitable Brown",
    colorCode: "rgb(100, 90, 75)",
  },
  {
    colorName: "SW 7505 Manor House",
    colorCode: "rgb(102, 93, 87)",
  },
  {
    colorName: "SW 7027 Well-Bred Brown",
    colorCode: "rgb(86, 69, 55)",
  },
  {
    colorName: "SW 7510 Chateau Brown",
    colorCode: "rgb(91, 75, 68)",
  },
  {
    colorName: "SW 7034 Status Bronze",
    colorCode: "rgb(92, 77, 60)",
  },
  {
    colorName: "SW 7020 Black Fox",
    colorCode: "rgb(79, 72, 66)",
  },
  {
    colorName: "SW 7048 Urbane Bronze",
    colorCode: "rgb(84, 80, 74)",
  },
  {
    colorName: "SW 7055 Enduring Bronze",
    colorCode: "rgb(85, 76, 62)",
  },
  {
    colorName: "SW 7103 Whitetail",
    colorCode: "rgb(244, 239, 228)",
  },
  {
    colorName: "SW 7105 Paperwhite",
    colorCode: "rgb(247, 239, 222)",
  },
  {
    colorName: "SW 7562 Roman Column",
    colorCode: "rgb(246, 240, 226)",
  },
  {
    colorName: "SW 8917 Shell White",
    colorCode: "rgb(240, 235, 224)",
  },
  {
    colorName: "SW 7104 Cotton White",
    colorCode: "rgb(247, 239, 227)",
  },
  {
    colorName: "SW 7554 Steamed Milk",
    colorCode: "rgb(236, 225, 209)",
  },
  {
    colorName: "SW 7001 Marshmallow",
    colorCode: "rgb(238, 233, 224)",
  },
  {
    colorName: "SW 6385 Dover White",
    colorCode: "rgb(240, 234, 220)",
  },
  {
    colorName: "SW 7106 Honied White",
    colorCode: "rgb(248, 238, 219)",
  },
  {
    colorName: "SW 6154 Nacre",
    colorCode: "rgb(232, 226, 212)",
  },
  {
    colorName: "SW 6364 Eggwhite",
    colorCode: "rgb(243, 229, 210)",
  },
  {
    colorName: "SW 7558 Medici Ivory",
    colorCode: "rgb(243, 233, 215)",
  },
  {
    colorName: "SW 6147 Panda White",
    colorCode: "rgb(234, 226, 212)",
  },
  {
    colorName: "SW 7102 White Flour",
    colorCode: "rgb(244, 239, 229)",
  },
  {
    colorName: "SW 7012 Creamy",
    colorCode: "rgb(239, 232, 219)",
  },
  {
    colorName: "SW 7557 Summer White",
    colorCode: "rgb(244, 233, 214)",
  },
  {
    colorName: "SW 7563 Restful White",
    colorCode: "rgb(238, 232, 215)",
  },
  {
    colorName: "SW 6378 Crisp Linen",
    colorCode: "rgb(243, 230, 212)",
  },
  {
    colorName: "SW 6112 Biscuit",
    colorCode: "rgb(235, 221, 203)",
  },
  {
    colorName: "SW 6140 Moderate White",
    colorCode: "rgb(233, 222, 207)",
  },
  {
    colorName: "SW 7002 Downy",
    colorCode: "rgb(239, 232, 221)",
  },
  {
    colorName: "SW 9180 Aged White",
    colorCode: "rgb(232, 222, 205)",
  },
  {
    colorName: "SW 7556 Crème",
    colorCode: "rgb(244, 232, 210)",
  },
  {
    colorName: "SW 7564 Polar Bear",
    colorCode: "rgb(232, 223, 202)",
  },
  {
    colorName: "SW 7571 Casa Blanca",
    colorCode: "rgb(237, 225, 206)",
  },
  {
    colorName: "SW 6350 Intricate Ivory",
    colorCode: "rgb(237, 221, 202)",
  },
  {
    colorName: "SW 6105 Divine White",
    colorCode: "rgb(230, 220, 205)",
  },
  {
    colorName: "SW 7101 Futon",
    colorCode: "rgb(237, 230, 219)",
  },
  {
    colorName: "SW 7568 Neutral Ground",
    colorCode: "rgb(226, 218, 202)",
  },
  {
    colorName: "SW 7559 Décor White",
    colorCode: "rgb(242, 229, 207)",
  },
  {
    colorName: "SW 6133 Muslin",
    colorCode: "rgb(234, 223, 201)",
  },
  {
    colorName: "SW 6126 Navajo White",
    colorCode: "rgb(233, 220, 198)",
  },
  {
    colorName: "SW 6357 Choice Cream",
    colorCode: "rgb(240, 225, 208)",
  },
  {
    colorName: "SW 7516 Kestrel White",
    colorCode: "rgb(224, 214, 200)",
  },
  {
    colorName: "SW 6084 Modest White",
    colorCode: "rgb(230, 221, 212)",
  },
  {
    colorName: "SW 7531 Canvas Tan",
    colorCode: "rgb(220, 209, 191)",
  },
  {
    colorName: "SW 6371 Vanillin",
    colorCode: "rgb(242, 227, 202)",
  },
  {
    colorName: "SW 6119 Antique White",
    colorCode: "rgb(232, 220, 198)",
  },
  {
    colorName: "SW 7572 Lotus Pod",
    colorCode: "rgb(231, 215, 194)",
  },
  {
    colorName: "SW 7553 Fragile Beauty",
    colorCode: "rgb(231, 215, 198)",
  },
  {
    colorName: "SW 7552 Bauhaus Buff",
    colorCode: "rgb(231, 219, 204)",
  },
  {
    colorName: "SW 6091 Reliable White",
    colorCode: "rgb(232, 222, 211)",
  },
  {
    colorName: "SW 7555 Patience",
    colorCode: "rgb(226, 211, 191)",
  },
  {
    colorName: "SW 7573 Eaglet Beige",
    colorCode: "rgb(233, 217, 192)",
  },
  {
    colorName: "SW 7575 Chopsticks",
    colorCode: "rgb(224, 209, 184)",
  },
  {
    colorName: "SW 7574 Echelon Ecru",
    colorCode: "rgb(231, 216, 190)",
  },
  {
    colorName: "SW 7537 Irish Cream",
    colorCode: "rgb(227, 210, 184)",
  },
  {
    colorName: "SW 7596 Only Natural",
    colorCode: "rgb(226, 211, 196)",
  },
  {
    colorName: "SW 6098 Pacer White",
    colorCode: "rgb(229, 221, 208)",
  },
  {
    colorName: "SW 6022 Breathless",
    colorCode: "rgb(214, 194, 190)",
  },
  {
    colorName: "SW 6029 White Truffle",
    colorCode: "rgb(215, 200, 194)",
  },
  {
    colorName: "SW 6043 Unfussy Beige",
    colorCode: "rgb(214, 200, 192)",
  },
  {
    colorName: "SW 6050 Abalone Shell",
    colorCode: "rgb(219, 199, 189)",
  },
  {
    colorName: "SW 6057 Malted Milk",
    colorCode: "rgb(222, 202, 189)",
  },
  {
    colorName: "SW 6064 Reticence",
    colorCode: "rgb(217, 205, 195)",
  },
  {
    colorName: "SW 6085 Simplify Beige",
    colorCode: "rgb(214, 199, 185)",
  },
  {
    colorName: "SW 6023 Insightful Rose",
    colorCode: "rgb(201, 176, 171)",
  },
  {
    colorName: "SW 6030 Artistic Taupe",
    colorCode: "rgb(195, 177, 172)",
  },
  {
    colorName: "SW 6044 Doeskin",
    colorCode: "rgb(198, 179, 169)",
  },
  {
    colorName: "SW 6051 Sashay Sand",
    colorCode: "rgb(207, 180, 168)",
  },
  {
    colorName: "SW 6058 Likeable Sand",
    colorCode: "rgb(209, 183, 168)",
  },
  {
    colorName: "SW 6065 Bona Fide Beige",
    colorCode: "rgb(203, 185, 171)",
  },
  {
    colorName: "SW 6086 Sand Dune",
    colorCode: "rgb(197, 177, 162)",
  },
  {
    colorName: "SW 6024 Dressy Rose",
    colorCode: "rgb(184, 157, 154)",
  },
  {
    colorName: "SW 6031 Glamour",
    colorCode: "rgb(182, 160, 154)",
  },
  {
    colorName: "SW 6045 Emerging Taupe",
    colorCode: "rgb(184, 161, 150)",
  },
  {
    colorName: "SW 6052 Sandbank",
    colorCode: "rgb(195, 164, 151)",
  },
  {
    colorName: "SW 6059 Interface Tan",
    colorCode: "rgb(193, 163, 146)",
  },
  {
    colorName: "SW 6066 Sand Trap",
    colorCode: "rgb(187, 165, 149)",
  },
  {
    colorName: "SW 6087 Trusty Tan",
    colorCode: "rgb(181, 159, 143)",
  },
  {
    colorName: "SW 9077 Rosaline Pearl",
    colorCode: "rgb(163, 136, 135)",
  },
  {
    colorName: "SW 9078 Cocoa Berry",
    colorCode: "rgb(160, 136, 130)",
  },
  {
    colorName: "SW 9079 Velvety Chestnut",
    colorCode: "rgb(162, 135, 125)",
  },
  {
    colorName: "SW 9080 Hushed Auburn",
    colorCode: "rgb(168, 133, 122)",
  },
  {
    colorName: "SW 9081 Redend Point",
    colorCode: "rgb(174, 142, 126)",
  },
  {
    colorName: "SW 9082 Chocolate Powder",
    colorCode: "rgb(165, 140, 123)",
  },
  {
    colorName: "SW 9083 Dusted Truffle",
    colorCode: "rgb(156, 131, 115)",
  },
  {
    colorName: "SW 6025 Socialite",
    colorCode: "rgb(144, 118, 118)",
  },
  {
    colorName: "SW 6032 Dutch Cocoa",
    colorCode: "rgb(140, 112, 106)",
  },
  {
    colorName: "SW 6046 Swing Brown",
    colorCode: "rgb(148, 117, 105)",
  },
  {
    colorName: "SW 6053 Reddened Earth",
    colorCode: "rgb(156, 110, 99)",
  },
  {
    colorName: "SW 6060 Moroccan Brown",
    colorCode: "rgb(157, 120, 104)",
  },
  {
    colorName: "SW 6067 Mocha",
    colorCode: "rgb(150, 122, 106)",
  },
  {
    colorName: "SW 6088 Nuthatch",
    colorCode: "rgb(142, 114, 95)",
  },
  {
    colorName: "SW 6026 River Rouge",
    colorCode: "rgb(118, 89, 93)",
  },
  {
    colorName: "SW 6033 Bateau Brown",
    colorCode: "rgb(122, 95, 90)",
  },
  {
    colorName: "SW 6047 Hot Cocoa",
    colorCode: "rgb(128, 98, 87)",
  },
  {
    colorName: "SW 6054 Canyon Clay",
    colorCode: "rgb(133, 89, 79)",
  },
  {
    colorName: "SW 6061 Tanbark",
    colorCode: "rgb(137, 102, 86)",
  },
  {
    colorName: "SW 6068 Brevity Brown",
    colorCode: "rgb(113, 82, 67)",
  },
  {
    colorName: "SW 6089 Grounded",
    colorCode: "rgb(120, 91, 71)",
  },
  {
    colorName: "SW 6027 Cordovan",
    colorCode: "rgb(95, 61, 63)",
  },
  {
    colorName: "SW 6034 Arresting Auburn",
    colorCode: "rgb(90, 53, 50)",
  },
  {
    colorName: "SW 6048 Terra Brun",
    colorCode: "rgb(90, 56, 45)",
  },
  {
    colorName: "SW 6055 Fiery Brown",
    colorCode: "rgb(93, 56, 49)",
  },
  {
    colorName: "SW 6062 Rugged Brown",
    colorCode: "rgb(105, 67, 54)",
  },
  {
    colorName: "SW 6069 French Roast",
    colorCode: "rgb(79, 52, 38)",
  },
  {
    colorName: "SW 6090 Java",
    colorCode: "rgb(99, 69, 51)",
  },
  {
    colorName: "SW 6078 Realist Beige",
    colorCode: "rgb(211, 200, 189)",
  },
  {
    colorName: "SW 9085 Touch of Sand",
    colorCode: "rgb(213, 199, 186)",
  },
  {
    colorName: "SW 6092 Lightweight Beige",
    colorCode: "rgb(218, 200, 184)",
  },
  {
    colorName: "SW 6099 Sand Dollar",
    colorCode: "rgb(215, 197, 179)",
  },
  {
    colorName: "SW 9094 Playa Arenosa",
    colorCode: "rgb(220, 199, 179)",
  },
  {
    colorName: "SW 9101 Tres Naturale",
    colorCode: "rgb(220, 199, 173)",
  },
  {
    colorName: "SW 6106 Kilim Beige",
    colorCode: "rgb(215, 197, 174)",
  },
  {
    colorName: "SW 6079 Diverse Beige",
    colorCode: "rgb(194, 180, 167)",
  },
  {
    colorName: "SW 9086 Cool Beige",
    colorCode: "rgb(198, 181, 167)",
  },
  {
    colorName: "SW 6093 Familiar Beige",
    colorCode: "rgb(202, 179, 160)",
  },
  {
    colorName: "SW 6100 Practical Beige",
    colorCode: "rgb(201, 178, 156)",
  },
  {
    colorName: "SW 9095 Ginger Root",
    colorCode: "rgb(210, 183, 158)",
  },
  {
    colorName: "SW 9102 Quinoa",
    colorCode: "rgb(207, 181, 151)",
  },
  {
    colorName: "SW 6107 Nomadic Desert",
    colorCode: "rgb(199, 177, 152)",
  },
  {
    colorName: "SW 6080 Utterly Beige",
    colorCode: "rgb(181, 165, 151)",
  },
  {
    colorName: "SW 9087 Smoky Beige",
    colorCode: "rgb(185, 167, 150)",
  },
  {
    colorName: "SW 6094 Sensational Sand",
    colorCode: "rgb(191, 163, 141)",
  },
  {
    colorName: "SW 6101 Sands of Time",
    colorCode: "rgb(188, 163, 139)",
  },
  {
    colorName: "SW 9096 Beige Intenso",
    colorCode: "rgb(197, 168, 141)",
  },
  {
    colorName: "SW 9103 Farro",
    colorCode: "rgb(193, 164, 133)",
  },
  {
    colorName: "SW 6108 Latte",
    colorCode: "rgb(186, 161, 133)",
  },
  {
    colorName: "SW 9084 Cocoa Whip",
    colorCode: "rgb(160, 142, 126)",
  },
  {
    colorName: "SW 9088 Utaupeia",
    colorCode: "rgb(165, 143, 123)",
  },
  {
    colorName: "SW 9092 Iced Mocha",
    colorCode: "rgb(163, 132, 108)",
  },
  {
    colorName: "SW 9093 Nearly Brown",
    colorCode: "rgb(168, 142, 118)",
  },
  {
    colorName: "SW 9097 Soft Fawn",
    colorCode: "rgb(181, 151, 120)",
  },
  {
    colorName: "SW 9104 Woven Wicker",
    colorCode: "rgb(185, 153, 116)",
  },
  {
    colorName: "SW 9108 Double Latte",
    colorCode: "rgb(167, 140, 113)",
  },
  {
    colorName: "SW 6081 Down Home",
    colorCode: "rgb(144, 120, 101)",
  },
  {
    colorName: "SW 9089 Llama Wool",
    colorCode: "rgb(145, 120, 100)",
  },
  {
    colorName: "SW 6095 Toasty",
    colorCode: "rgb(149, 114, 88)",
  },
  {
    colorName: "SW 6102 Portabello",
    colorCode: "rgb(148, 122, 98)",
  },
  {
    colorName: "SW 9098 Baked Cookie",
    colorCode: "rgb(137, 103, 74)",
  },
  {
    colorName: "SW 9105 Almond Roca",
    colorCode: "rgb(167, 131, 97)",
  },
  {
    colorName: "SW 6109 Hopsack",
    colorCode: "rgb(158, 129, 99)",
  },
  {
    colorName: "SW 6082 Cobble Brown",
    colorCode: "rgb(122, 100, 85)",
  },
  {
    colorName: "SW 9090 Caraïbe",
    colorCode: "rgb(120, 95, 76)",
  },
  {
    colorName: "SW 6096 Jute Brown",
    colorCode: "rgb(129, 93, 64)",
  },
  {
    colorName: "SW 6103 Tea Chest",
    colorCode: "rgb(125, 100, 77)",
  },
  {
    colorName: "SW 9099 Saddle Up",
    colorCode: "rgb(114, 82, 55)",
  },
  {
    colorName: "SW 9106 El Caramelo",
    colorCode: "rgb(148, 110, 72)",
  },
  {
    colorName: "SW 6110 Steady Brown",
    colorCode: "rgb(138, 107, 77)",
  },
  {
    colorName: "SW 6083 Sable",
    colorCode: "rgb(95, 75, 63)",
  },
  {
    colorName: "SW 9091 Half-Caff",
    colorCode: "rgb(96, 76, 61)",
  },
  {
    colorName: "SW 6097 Sturdy Brown",
    colorCode: "rgb(105, 72, 44)",
  },
  {
    colorName: "SW 6104 Kaffee",
    colorCode: "rgb(101, 80, 61)",
  },
  {
    colorName: "SW 9100 Umber Rust",
    colorCode: "rgb(118, 81, 56)",
  },
  {
    colorName: "SW 9107 Über Umber",
    colorCode: "rgb(123, 88, 56)",
  },
  {
    colorName: "SW 6111 Coconut Husk",
    colorCode: "rgb(112, 87, 63)",
  },
  {
    colorName: "SW 9109 Natural Linen",
    colorCode: "rgb(223, 211, 195)",
  },
  {
    colorName: "SW 6141 Softer Tan",
    colorCode: "rgb(218, 202, 178)",
  },
  {
    colorName: "SW 6148 Wool Skein",
    colorCode: "rgb(217, 207, 186)",
  },
  {
    colorName: "SW 6134 Netsuke",
    colorCode: "rgb(224, 207, 176)",
  },
  {
    colorName: "SW 9119 Dirty Martini",
    colorCode: "rgb(221, 208, 182)",
  },
  {
    colorName: "SW 6155 Rice Grain",
    colorCode: "rgb(219, 208, 185)",
  },
  {
    colorName: "SW 6169 Sedate Gray",
    colorCode: "rgb(209, 205, 191)",
  },
  {
    colorName: "SW 9110 Malabar",
    colorCode: "rgb(207, 190, 169)",
  },
  {
    colorName: "SW 6142 Macadamia",
    colorCode: "rgb(204, 183, 155)",
  },
  {
    colorName: "SW 6149 Relaxed Khaki",
    colorCode: "rgb(200, 187, 163)",
  },
  {
    colorName: "SW 6135 Ecru",
    colorCode: "rgb(208, 186, 148)",
  },
  {
    colorName: "SW 9120 Tumblin' Tumbleweed",
    colorCode: "rgb(205, 187, 156)",
  },
  {
    colorName: "SW 6156 Ramie",
    colorCode: "rgb(205, 189, 162)",
  },
  {
    colorName: "SW 6170 Techno Gray",
    colorCode: "rgb(191, 185, 170)",
  },
  {
    colorName: "SW 9111 Antler Velvet",
    colorCode: "rgb(192, 173, 150)",
  },
  {
    colorName: "SW 6143 Basket Beige",
    colorCode: "rgb(192, 169, 139)",
  },
  {
    colorName: "SW 6150 Universal Khaki",
    colorCode: "rgb(184, 169, 146)",
  },
  {
    colorName: "SW 6136 Harmonic Tan",
    colorCode: "rgb(198, 176, 138)",
  },
  {
    colorName: "SW 9121 Sawgrass Basket",
    colorCode: "rgb(195, 176, 144)",
  },
  {
    colorName: "SW 6157 Favorite Tan",
    colorCode: "rgb(193, 174, 145)",
  },
  {
    colorName: "SW 6171 Chatroom",
    colorCode: "rgb(176, 171, 156)",
  },
  {
    colorName: "SW 9112 Song Thrush",
    colorCode: "rgb(175, 152, 127)",
  },
  {
    colorName: "SW 9116 Serengeti Grass",
    colorCode: "rgb(171, 149, 121)",
  },
  {
    colorName: "SW 9117 Urban Jungle",
    colorCode: "rgb(164, 148, 126)",
  },
  {
    colorName: "SW 9118 Tarnished Treasure",
    colorCode: "rgb(185, 164, 126)",
  },
  {
    colorName: "SW 9122 Dried Edamame",
    colorCode: "rgb(177, 159, 128)",
  },
  {
    colorName: "SW 7544 Fenland",
    colorCode: "rgb(172, 157, 131)",
  },
  {
    colorName: "SW 9126 Honed Soapstone",
    colorCode: "rgb(157, 152, 135)",
  },
  {
    colorName: "SW 9113 Mudslide",
    colorCode: "rgb(160, 133, 104)",
  },
  {
    colorName: "SW 6144 Dapper Tan",
    colorCode: "rgb(148, 127, 101)",
  },
  {
    colorName: "SW 6151 Quiver Tan",
    colorCode: "rgb(142, 127, 106)",
  },
  {
    colorName: "SW 6137 Burlap",
    colorCode: "rgb(172, 149, 113)",
  },
  {
    colorName: "SW 9123 Barro Verde",
    colorCode: "rgb(159, 142, 113)",
  },
  {
    colorName: "SW 6158 Sawdust",
    colorCode: "rgb(153, 137, 112)",
  },
  {
    colorName: "SW 6172 Hardware",
    colorCode: "rgb(139, 131, 114)",
  },
  {
    colorName: "SW 9114 Fallen Leaves",
    colorCode: "rgb(143, 118, 89)",
  },
  {
    colorName: "SW 6145 Thatch Brown",
    colorCode: "rgb(134, 112, 87)",
  },
  {
    colorName: "SW 6152 Superior Bronze",
    colorCode: "rgb(120, 105, 87)",
  },
  {
    colorName: "SW 6138 Artifact",
    colorCode: "rgb(154, 129, 94)",
  },
  {
    colorName: "SW 9124 Verde Marrón",
    colorCode: "rgb(135, 116, 89)",
  },
  {
    colorName: "SW 6159 High Tea",
    colorCode: "rgb(126, 111, 89)",
  },
  {
    colorName: "SW 6173 Cocoon",
    colorCode: "rgb(114, 107, 91)",
  },
  {
    colorName: "SW 9115 Cowboy Boots",
    colorCode: "rgb(105, 82, 57)",
  },
  {
    colorName: "SW 6146 Umber",
    colorCode: "rgb(110, 84, 60)",
  },
  {
    colorName: "SW 6153 Protégé Bronze",
    colorCode: "rgb(102, 84, 62)",
  },
  {
    colorName: "SW 6139 Mossy Gold",
    colorCode: "rgb(127, 103, 67)",
  },
  {
    colorName: "SW 9125 Oliva Oscuro",
    colorCode: "rgb(102, 84, 57)",
  },
  {
    colorName: "SW 6160 Best Bronze",
    colorCode: "rgb(93, 81, 62)",
  },
  {
    colorName: "SW 7745 Muddled Basil",
    colorCode: "rgb(90, 82, 67)",
  },
  {
    colorName: "SW 6162 Ancient Marble",
    colorCode: "rgb(209, 204, 185)",
  },
  {
    colorName: "SW 6176 Liveable Green",
    colorCode: "rgb(206, 206, 189)",
  },
  {
    colorName: "SW 6190 Filmy Green",
    colorCode: "rgb(209, 211, 199)",
  },
  {
    colorName: "SW 6183 Conservative Gray",
    colorCode: "rgb(209, 208, 198)",
  },
  {
    colorName: "SW 6197 Aloof Gray",
    colorCode: "rgb(201, 201, 192)",
  },
  {
    colorName: "SW 6204 Sea Salt",
    colorCode: "rgb(205, 210, 202)",
  },
  {
    colorName: "SW 6211 Rainwashed",
    colorCode: "rgb(194, 205, 197)",
  },
  {
    colorName: "SW 6163 Grassland",
    colorCode: "rgb(193, 188, 167)",
  },
  {
    colorName: "SW 6177 Softened Green",
    colorCode: "rgb(187, 188, 167)",
  },
  {
    colorName: "SW 6191 Contented",
    colorCode: "rgb(189, 192, 179)",
  },
  {
    colorName: "SW 6184 Austere Gray",
    colorCode: "rgb(190, 191, 178)",
  },
  {
    colorName: "SW 6198 Sensible Hue",
    colorCode: "rgb(182, 181, 171)",
  },
  {
    colorName: "SW 6205 Comfort Gray",
    colorCode: "rgb(190, 195, 187)",
  },
  {
    colorName: "SW 6212 Quietude",
    colorCode: "rgb(173, 187, 178)",
  },
  {
    colorName: "SW 6164 Svelte Sage",
    colorCode: "rgb(178, 172, 150)",
  },
  {
    colorName: "SW 6178 Clary Sage",
    colorCode: "rgb(172, 173, 151)",
  },
  {
    colorName: "SW 6192 Coastal Plain",
    colorCode: "rgb(159, 166, 148)",
  },
  {
    colorName: "SW 6185 Escape Gray",
    colorCode: "rgb(171, 172, 159)",
  },
  {
    colorName: "SW 6199 Rare Gray",
    colorCode: "rgb(166, 166, 155)",
  },
  {
    colorName: "SW 6206 Oyster Bay",
    colorCode: "rgb(174, 179, 169)",
  },
  {
    colorName: "SW 6213 Halcyon Green",
    colorCode: "rgb(155, 170, 162)",
  },
  {
    colorName: "SW 9127 At Ease Soldier",
    colorCode: "rgb(158, 153, 133)",
  },
  {
    colorName: "SW 9128 Green Onyx",
    colorCode: "rgb(152, 154, 130)",
  },
  {
    colorName: "SW 9129 Jade Dragon",
    colorCode: "rgb(144, 152, 134)",
  },
  {
    colorName: "SW 9130 Evergreen Fog",
    colorCode: "rgb(149, 151, 138)",
  },
  {
    colorName: "SW 9131 Cornwall Slate",
    colorCode: "rgb(148, 148, 136)",
  },
  {
    colorName: "SW 9132 Acacia Haze",
    colorCode: "rgb(150, 156, 146)",
  },
  {
    colorName: "SW 9133 Jasper Stone",
    colorCode: "rgb(141, 158, 151)",
  },
  {
    colorName: "SW 6165 Connected Gray",
    colorCode: "rgb(137, 132, 115)",
  },
  {
    colorName: "SW 6179 Artichoke",
    colorCode: "rgb(127, 130, 102)",
  },
  {
    colorName: "SW 6193 Privilege Green",
    colorCode: "rgb(122, 135, 117)",
  },
  {
    colorName: "SW 6186 Dried Thyme",
    colorCode: "rgb(123, 128, 112)",
  },
  {
    colorName: "SW 6200 Link Gray",
    colorCode: "rgb(127, 126, 114)",
  },
  {
    colorName: "SW 6207 Retreat",
    colorCode: "rgb(122, 128, 118)",
  },
  {
    colorName: "SW 6214 Underseas",
    colorCode: "rgb(124, 142, 135)",
  },
  {
    colorName: "SW 6166 Eclipse",
    colorCode: "rgb(107, 103, 87)",
  },
  {
    colorName: "SW 6180 Oakmoss",
    colorCode: "rgb(101, 104, 76)",
  },
  {
    colorName: "SW 6194 Basil",
    colorCode: "rgb(98, 110, 96)",
  },
  {
    colorName: "SW 6187 Rosemary",
    colorCode: "rgb(100, 105, 92)",
  },
  {
    colorName: "SW 6201 Thunderous",
    colorCode: "rgb(109, 108, 98)",
  },
  {
    colorName: "SW 6208 Pewter Green",
    colorCode: "rgb(94, 98, 89)",
  },
  {
    colorName: "SW 6215 Rocky River",
    colorCode: "rgb(94, 112, 106)",
  },
  {
    colorName: "SW 6167 Garden Gate",
    colorCode: "rgb(94, 89, 73)",
  },
  {
    colorName: "SW 6181 Secret Garden",
    colorCode: "rgb(79, 82, 58)",
  },
  {
    colorName: "SW 6195 Rock Garden",
    colorCode: "rgb(70, 84, 72)",
  },
  {
    colorName: "SW 6188 Shade-Grown",
    colorCode: "rgb(78, 81, 71)",
  },
  {
    colorName: "SW 6202 Cast Iron",
    colorCode: "rgb(100, 100, 90)",
  },
  {
    colorName: "SW 6209 Ripe Olive",
    colorCode: "rgb(68, 72, 61)",
  },
  {
    colorName: "SW 6216 Jasper",
    colorCode: "rgb(52, 59, 54)",
  },
  {
    colorName: "SW 6218 Tradewind",
    colorCode: "rgb(194, 207, 207)",
  },
  {
    colorName: "SW 6225 Sleepy Blue",
    colorCode: "rgb(188, 203, 206)",
  },
  {
    colorName: "SW 9136 Lullaby",
    colorCode: "rgb(203, 212, 212)",
  },
  {
    colorName: "SW 6232 Misty",
    colorCode: "rgb(205, 210, 210)",
  },
  {
    colorName: "SW 9144 Moonmist",
    colorCode: "rgb(201, 217, 224)",
  },
  {
    colorName: "SW 6239 Upward",
    colorCode: "rgb(191, 201, 208)",
  },
  {
    colorName: "SW 6246 North Star",
    colorCode: "rgb(202, 208, 210)",
  },
  {
    colorName: "SW 6219 Rain",
    colorCode: "rgb(171, 190, 191)",
  },
  {
    colorName: "SW 6226 Languid Blue",
    colorCode: "rgb(164, 183, 189)",
  },
  {
    colorName: "SW 9137 Niebla Azul",
    colorCode: "rgb(182, 195, 196)",
  },
  {
    colorName: "SW 6233 Samovar Silver",
    colorCode: "rgb(184, 190, 190)",
  },
  {
    colorName: "SW 9145 Sleepy Hollow",
    colorCode: "rgb(183, 201, 209)",
  },
  {
    colorName: "SW 6240 Windy Blue",
    colorCode: "rgb(170, 186, 198)",
  },
  {
    colorName: "SW 6247 Krypton",
    colorCode: "rgb(184, 192, 195)",
  },
  {
    colorName: "SW 6220 Interesting Aqua",
    colorCode: "rgb(155, 175, 178)",
  },
  {
    colorName: "SW 6227 Meditative",
    colorCode: "rgb(150, 170, 176)",
  },
  {
    colorName: "SW 9138 Stardew",
    colorCode: "rgb(166, 178, 181)",
  },
  {
    colorName: "SW 6234 Uncertain Gray",
    colorCode: "rgb(169, 176, 177)",
  },
  {
    colorName: "SW 9146 Faded Flaxflower",
    colorCode: "rgb(158, 180, 192)",
  },
  {
    colorName: "SW 6241 Aleutian",
    colorCode: "rgb(152, 169, 183)",
  },
  {
    colorName: "SW 6248 Jubilee",
    colorCode: "rgb(173, 181, 185)",
  },
  {
    colorName: "SW 9134 Delft",
    colorCode: "rgb(139, 159, 160)",
  },
  {
    colorName: "SW 9135 Whirlpool",
    colorCode: "rgb(128, 150, 157)",
  },
  {
    colorName: "SW 9139 Debonair",
    colorCode: "rgb(144, 160, 166)",
  },
  {
    colorName: "SW 9143 Cadet",
    colorCode: "rgb(145, 153, 156)",
  },
  {
    colorName: "SW 9147 Favorite Jeans",
    colorCode: "rgb(138, 163, 177)",
  },
  {
    colorName: "SW 9151 Daphne",
    colorCode: "rgb(137, 156, 170)",
  },
  {
    colorName: "SW 9152 Let it Rain",
    colorCode: "rgb(151, 159, 165)",
  },
  {
    colorName: "SW 6221 Moody Blue",
    colorCode: "rgb(122, 145, 146)",
  },
  {
    colorName: "SW 6228 Refuge",
    colorCode: "rgb(96, 125, 132)",
  },
  {
    colorName: "SW 9140 Blustery Sky",
    colorCode: "rgb(111, 132, 140)",
  },
  {
    colorName: "SW 6235 Foggy Day",
    colorCode: "rgb(114, 124, 127)",
  },
  {
    colorName: "SW 9148 Smoky Azurite",
    colorCode: "rgb(112, 141, 158)",
  },
  {
    colorName: "SW 6242 Bracing Blue",
    colorCode: "rgb(118, 139, 154)",
  },
  {
    colorName: "SW 6249 Storm Cloud",
    colorCode: "rgb(122, 132, 141)",
  },
  {
    colorName: "SW 6222 Riverway",
    colorCode: "rgb(93, 114, 116)",
  },
  {
    colorName: "SW 6229 Tempe Star",
    colorCode: "rgb(71, 98, 106)",
  },
  {
    colorName: "SW 9141 Waterloo",
    colorCode: "rgb(83, 104, 114)",
  },
  {
    colorName: "SW 6236 Grays Harbor",
    colorCode: "rgb(89, 99, 104)",
  },
  {
    colorName: "SW 9149 Inky Blue",
    colorCode: "rgb(78, 114, 135)",
  },
  {
    colorName: "SW 6243 Distance",
    colorCode: "rgb(93, 111, 127)",
  },
  {
    colorName: "SW 6250 Granite Peak",
    colorCode: "rgb(96, 107, 117)",
  },
  {
    colorName: "SW 6223 Still Water",
    colorCode: "rgb(74, 93, 95)",
  },
  {
    colorName: "SW 6230 Rainstorm",
    colorCode: "rgb(36, 70, 83)",
  },
  {
    colorName: "SW 9142 Moscow Midnight",
    colorCode: "rgb(32, 70, 82)",
  },
  {
    colorName: "SW 6237 Dark Night",
    colorCode: "rgb(35, 56, 63)",
  },
  {
    colorName: "SW 9150 Endless Sea",
    colorCode: "rgb(50, 88, 110)",
  },
  {
    colorName: "SW 7602 Indigo Batik",
    colorCode: "rgb(62, 80, 99)",
  },
  {
    colorName: "SW 6251 Outerspace",
    colorCode: "rgb(88, 97, 104)",
  },
  {
    colorName: "SW 6274 Destiny",
    colorCode: "rgb(207, 201, 200)",
  },
  {
    colorName: "SW 7078 Minute Mauve",
    colorCode: "rgb(207, 201, 200)",
  },
  {
    colorName: "SW 6260 Unique Gray",
    colorCode: "rgb(203, 201, 201)",
  },
  {
    colorName: "SW 6267 Sensitive Tint",
    colorCode: "rgb(206, 201, 204)",
  },
  {
    colorName: "SW 6015 Vaguely Mauve",
    colorCode: "rgb(209, 197, 196)",
  },
  {
    colorName: "SW 6008 Individual White",
    colorCode: "rgb(212, 205, 202)",
  },
  {
    colorName: "SW 6036 Angora",
    colorCode: "rgb(209, 197, 190)",
  },
  {
    colorName: "SW 6275 Fashionable Gray",
    colorCode: "rgb(189, 184, 184)",
  },
  {
    colorName: "SW 7079 Ponder",
    colorCode: "rgb(188, 182, 182)",
  },
  {
    colorName: "SW 6261 Swanky Gray",
    colorCode: "rgb(181, 177, 181)",
  },
  {
    colorName: "SW 6268 Veiled Violet",
    colorCode: "rgb(189, 181, 185)",
  },
  {
    colorName: "SW 6016 Chaise Mauve",
    colorCode: "rgb(193, 178, 179)",
  },
  {
    colorName: "SW 6009 Imagine",
    colorCode: "rgb(194, 182, 182)",
  },
  {
    colorName: "SW 6037 Temperate Taupe",
    colorCode: "rgb(191, 177, 170)",
  },
  {
    colorName: "SW 6276 Mystical Shade",
    colorCode: "rgb(174, 169, 170)",
  },
  {
    colorName: "SW 7080 Quest Gray",
    colorCode: "rgb(173, 165, 165)",
  },
  {
    colorName: "SW 6262 Mysterious Mauve",
    colorCode: "rgb(166, 163, 169)",
  },
  {
    colorName: "SW 6269 Beguiling Mauve",
    colorCode: "rgb(175, 167, 172)",
  },
  {
    colorName: "SW 6017 Intuitive",
    colorCode: "rgb(179, 163, 165)",
  },
  {
    colorName: "SW 6010 Flexible Gray",
    colorCode: "rgb(177, 163, 161)",
  },
  {
    colorName: "SW 6038 Truly Taupe",
    colorCode: "rgb(172, 158, 151)",
  },
  {
    colorName: "SW 9153 Moonlit Orchid",
    colorCode: "rgb(148, 145, 148)",
  },
  {
    colorName: "SW 9155 Slate Violet",
    colorCode: "rgb(152, 145, 146)",
  },
  {
    colorName: "SW 9156 Gris Morado",
    colorCode: "rgb(143, 138, 145)",
  },
  {
    colorName: "SW 9157 Autumn Orchid",
    colorCode: "rgb(157, 144, 147)",
  },
  {
    colorName: "SW 9158 Coquina",
    colorCode: "rgb(157, 141, 142)",
  },
  {
    colorName: "SW 9159 Auger Shell",
    colorCode: "rgb(159, 146, 145)",
  },
  {
    colorName: "SW 9160 Armadillo",
    colorCode: "rgb(158, 144, 137)",
  },
  {
    colorName: "SW 6277 Special Gray",
    colorCode: "rgb(123, 120, 125)",
  },
  {
    colorName: "SW 7081 Sensuous Gray",
    colorCode: "rgb(131, 125, 127)",
  },
  {
    colorName: "SW 6263 Exclusive Plum",
    colorCode: "rgb(115, 111, 120)",
  },
  {
    colorName: "SW 6270 Soulmate",
    colorCode: "rgb(133, 119, 123)",
  },
  {
    colorName: "SW 6018 Enigma",
    colorCode: "rgb(139, 124, 126)",
  },
  {
    colorName: "SW 6011 Chinchilla",
    colorCode: "rgb(134, 120, 117)",
  },
  {
    colorName: "SW 6039 Poised Taupe",
    colorCode: "rgb(140, 126, 120)",
  },
  {
    colorName: "SW 6278 Cloak Gray",
    colorCode: "rgb(96, 94, 99)",
  },
  {
    colorName: "SW 7082 Stunning Shade",
    colorCode: "rgb(103, 96, 100)",
  },
  {
    colorName: "SW 6264 Midnight",
    colorCode: "rgb(93, 89, 98)",
  },
  {
    colorName: "SW 6271 Expressive Plum",
    colorCode: "rgb(105, 92, 98)",
  },
  {
    colorName: "SW 6019 Poetry Plum",
    colorCode: "rgb(111, 92, 95)",
  },
  {
    colorName: "SW 6012 Browse Brown",
    colorCode: "rgb(110, 97, 95)",
  },
  {
    colorName: "SW 6040 Less Brown",
    colorCode: "rgb(117, 103, 97)",
  },
  {
    colorName: "SW 9154 Perle Noir",
    colorCode: "rgb(79, 77, 81)",
  },
  {
    colorName: "SW 7083 Darkroom",
    colorCode: "rgb(68, 62, 64)",
  },
  {
    colorName: "SW 6265 Quixotic Plum",
    colorCode: "rgb(74, 70, 83)",
  },
  {
    colorName: "SW 6272 Plum Brown",
    colorCode: "rgb(78, 66, 71)",
  },
  {
    colorName: "SW 6020 Marooned",
    colorCode: "rgb(78, 49, 50)",
  },
  {
    colorName: "SW 6013 Bitter Chocolate",
    colorCode: "rgb(77, 60, 60)",
  },
  {
    colorName: "SW 6041 Otter",
    colorCode: "rgb(86, 67, 59)",
  },
  {
    colorName: "SW 7541 Grecian Ivory",
    colorCode: "rgb(216, 207, 190)",
  },
  {
    colorName: "SW 9173 Shiitake",
    colorCode: "rgb(200, 188, 171)",
  },
  {
    colorName: "SW 7036 Accessible Beige",
    colorCode: "rgb(209, 199, 184)",
  },
  {
    colorName: "SW 7517 China Doll",
    colorCode: "rgb(219, 206, 189)",
  },
  {
    colorName: "SW 6258 Tricorn Black",
    colorCode: "rgb(47, 47, 48)",
  },
  {
    colorName: "SW 2735 Rockweed",
    colorCode: "rgb(68, 55, 53)",
  },
  {
    colorName: "SW 9176 Dress Blues",
    colorCode: "rgb(43, 67, 96)",
  },
  {
    colorName: "SW 7638 Jogging Path",
    colorCode: "rgb(192, 185, 169)",
  },
  {
    colorName: "SW 7506 Loggia",
    colorCode: "rgb(196, 183, 165)",
  },
  {
    colorName: "SW 7037 Balanced Beige",
    colorCode: "rgb(192, 178, 162)",
  },
  {
    colorName: "SW 7511 Bungalow Beige",
    colorCode: "rgb(205, 191, 176)",
  },
  {
    colorName: "SW 6990 Caviar",
    colorCode: "rgb(49, 48, 49)",
  },
  {
    colorName: "SW 6006 Black Bean",
    colorCode: "rgb(64, 51, 48)",
  },
  {
    colorName: "SW 9177 Salty Dog",
    colorCode: "rgb(35, 64, 88)",
  },
  {
    colorName: "SW 7644 Gateway Gray",
    colorCode: "rgb(178, 172, 156)",
  },
  {
    colorName: "SW 7507 Stone Lion",
    colorCode: "rgb(179, 164, 145)",
  },
  {
    colorName: "SW 7038 Tony Taupe",
    colorCode: "rgb(177, 162, 144)",
  },
  {
    colorName: "SW 7524 Dhurrie Beige",
    colorCode: "rgb(202, 186, 168)",
  },
  {
    colorName: "SW 6991 Black Magic",
    colorCode: "rgb(50, 49, 50)",
  },
  {
    colorName: "SW 7630 Raisin",
    colorCode: "rgb(57, 43, 45)",
  },
  {
    colorName: "SW 9178 In the Navy",
    colorCode: "rgb(40, 56, 73)",
  },
  {
    colorName: "SW 7639 Ethereal Mood",
    colorCode: "rgb(174, 165, 148)",
  },
  {
    colorName: "SW 7633 Taupe Tone",
    colorCode: "rgb(173, 160, 144)",
  },
  {
    colorName: "SW 9174 Moth Wing",
    colorCode: "rgb(160, 144, 127)",
  },
  {
    colorName: "SW 7512 Pavilion Beige",
    colorCode: "rgb(197, 182, 164)",
  },
  {
    colorName: "SW 6992 Inkwell",
    colorCode: "rgb(49, 54, 58)",
  },
  {
    colorName: "SW 9175 Deep Forest Brown",
    colorCode: "rgb(57, 52, 55)",
  },
  {
    colorName: "SW 2739 Charcoal Blue",
    colorCode: "rgb(61, 68, 80)",
  },
  {
    colorName: "SW 7640 Fawn Brindle",
    colorCode: "rgb(167, 160, 148)",
  },
  {
    colorName: "SW 7513 Sanderling",
    colorCode: "rgb(167, 149, 130)",
  },
  {
    colorName: "SW 7039 Virtual Taupe",
    colorCode: "rgb(138, 122, 106)",
  },
  {
    colorName: "SW 7501 Threshold Taupe",
    colorCode: "rgb(172, 154, 138)",
  },
  {
    colorName: "SW 6993 Black of Night",
    colorCode: "rgb(50, 54, 57)",
  },
  {
    colorName: "SW 6989 Domino",
    colorCode: "rgb(53, 51, 55)",
  },
  {
    colorName: "SW 2740 Mineral Gray",
    colorCode: "rgb(81, 87, 99)",
  },
  {
    colorName: "SW 7746 Rushing River",
    colorCode: "rgb(161, 156, 143)",
  },
  {
    colorName: "SW 7508 Tavern Taupe",
    colorCode: "rgb(156, 138, 121)",
  },
  {
    colorName: "SW 7040 Smokehouse",
    colorCode: "rgb(113, 99, 84)",
  },
  {
    colorName: "SW 7502 Dry Dock",
    colorCode: "rgb(161, 141, 125)",
  },
  {
    colorName: "SW 6994 Greenblack",
    colorCode: "rgb(55, 58, 58)",
  },
  {
    colorName: "SW 6988 Bohemian Black",
    colorCode: "rgb(59, 55, 60)",
  },
  {
    colorName: "SW 6244 Naval",
    colorCode: "rgb(47, 61, 76)",
  },
  {
    colorName: "SW 7743 Mountain Road",
    colorCode: "rgb(134, 133, 120)",
  },
  {
    colorName: "SW 7514 Foothills",
    colorCode: "rgb(130, 116, 102)",
  },
  {
    colorName: "SW 7041 Van Dyke Brown",
    colorCode: "rgb(86, 69, 54)",
  },
  {
    colorName: "SW 7509 Tiki Hut",
    colorCode: "rgb(130, 111, 94)",
  },
  {
    colorName: "SW 7069 Iron Ore",
    colorCode: "rgb(67, 67, 65)",
  },
  {
    colorName: "SW 6279 Black Swan",
    colorCode: "rgb(58, 55, 62)",
  },
  {
    colorName: "SW 9179 Anchors Aweigh",
    colorCode: "rgb(43, 52, 65)",
  },
  {
    colorName: "SW 6665 Gardenia",
    colorCode: "rgb(243, 226, 201)",
  },
  {
    colorName: "SW 6413 Restoration Ivory",
    colorCode: "rgb(233, 225, 202)",
  },
  {
    colorName: "SW 6161 Nonchalant White",
    colorCode: "rgb(222, 221, 209)",
  },
  {
    colorName: "SW 6476 Glimmer",
    colorCode: "rgb(224, 231, 226)",
  },
  {
    colorName: "SW 6504 Sky High",
    colorCode: "rgb(220, 231, 232)",
  },
  {
    colorName: "SW 6224 Mountain Air",
    colorCode: "rgb(216, 224, 223)",
  },
  {
    colorName: "SW 6056 Polite White",
    colorCode: "rgb(233, 221, 212)",
  },
  {
    colorName: "SW 6658 Welcome White",
    colorCode: "rgb(243, 227, 202)",
  },
  {
    colorName: "SW 6406 Ionic Ivory",
    colorCode: "rgb(231, 223, 197)",
  },
  {
    colorName: "SW 6434 Spinach White",
    colorCode: "rgb(228, 232, 218)",
  },
  {
    colorName: "SW 6189 Opaline",
    colorCode: "rgb(220, 223, 215)",
  },
  {
    colorName: "SW 6511 Snowdrop",
    colorCode: "rgb(224, 232, 231)",
  },
  {
    colorName: "SW 6245 Quicksilver",
    colorCode: "rgb(221, 226, 224)",
  },
  {
    colorName: "SW 6049 Gorgeous White",
    colorCode: "rgb(231, 219, 211)",
  },
  {
    colorName: "SW 6644 Champagne",
    colorCode: "rgb(242, 227, 206)",
  },
  {
    colorName: "SW 6399 Chamomile",
    colorCode: "rgb(233, 224, 197)",
  },
  {
    colorName: "SW 6441 White Mint",
    colorCode: "rgb(224, 231, 218)",
  },
  {
    colorName: "SW 6210 Window Pane",
    colorCode: "rgb(215, 223, 216)",
  },
  {
    colorName: "SW 6217 Topsail",
    colorCode: "rgb(218, 226, 224)",
  },
  {
    colorName: "SW 6238 Icicle",
    colorCode: "rgb(219, 223, 224)",
  },
  {
    colorName: "SW 6042 Hush White",
    colorCode: "rgb(229, 218, 212)",
  },
  {
    colorName: "SW 6336 Nearly Peach",
    colorCode: "rgb(239, 222, 209)",
  },
  {
    colorName: "SW 6392 Vital Yellow",
    colorCode: "rgb(237, 224, 197)",
  },
  {
    colorName: "SW 6175 Sagey",
    colorCode: "rgb(226, 226, 209)",
  },
  {
    colorName: "SW 6455 Fleeting Green",
    colorCode: "rgb(216, 226, 216)",
  },
  {
    colorName: "SW 6497 Blue Horizon",
    colorCode: "rgb(216, 231, 230)",
  },
  {
    colorName: "SW 6525 Rarified Air",
    colorCode: "rgb(225, 230, 230)",
  },
  {
    colorName: "SW 6021 Dreamy White",
    colorCode: "rgb(227, 217, 213)",
  },
  {
    colorName: "SW 6329 Faint Coral",
    colorCode: "rgb(238, 222, 213)",
  },
  {
    colorName: "SW 6700 Daybreak",
    colorCode: "rgb(243, 234, 198)",
  },
  {
    colorName: "SW 6420 Queen Anne's Lace",
    colorCode: "rgb(236, 234, 213)",
  },
  {
    colorName: "SW 6462 Green Trance",
    colorCode: "rgb(215, 228, 219)",
  },
  {
    colorName: "SW 6784 Bravo Blue",
    colorCode: "rgb(211, 231, 233)",
  },
  {
    colorName: "SW 6000 Snowfall",
    colorCode: "rgb(224, 222, 218)",
  },
  {
    colorName: "SW 6007 Smart White",
    colorCode: "rgb(228, 219, 216)",
  },
  {
    colorName: "SW 6322 Intimate White",
    colorCode: "rgb(240, 225, 216)",
  },
  {
    colorName: "SW 6693 Lily",
    colorCode: "rgb(243, 232, 194)",
  },
  {
    colorName: "SW 6427 Sprout",
    colorCode: "rgb(228, 228, 206)",
  },
  {
    colorName: "SW 6749 Embellished Blue",
    colorCode: "rgb(215, 235, 226)",
  },
  {
    colorName: "SW 6798 Iceberg",
    colorCode: "rgb(214, 228, 231)",
  },
  {
    colorName: "SW 6259 Spatial White",
    colorCode: "rgb(221, 220, 219)",
  },
  {
    colorName: "SW 7077 Original White",
    colorCode: "rgb(226, 222, 219)",
  },
  {
    colorName: "SW 6876 Comical Coral",
    colorCode: "rgb(243, 209, 200)",
  },
  {
    colorName: "SW 6901 Daffodil",
    colorCode: "rgb(250, 217, 122)",
  },
  {
    colorName: "SW 6928 Green Vibes",
    colorCode: "rgb(212, 231, 195)",
  },
  {
    colorName: "SW 6937 Tantalizing Teal",
    colorCode: "rgb(135, 220, 206)",
  },
  {
    colorName: "SW 6957 Undercool",
    colorCode: "rgb(127, 195, 225)",
  },
  {
    colorName: "SW 6968 Hyacinth Tint",
    colorCode: "rgb(194, 203, 224)",
  },
  {
    colorName: "SW 6973 Free Spirit",
    colorCode: "rgb(202, 178, 210)",
  },
];

export default colorslist;
