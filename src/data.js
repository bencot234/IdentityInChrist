const verses = [
	{
		id: 1,
		verse: 'Rev. 1:5-6',
		text: 'and from Jesus Christ, the faithful witness, the firstborn from the dead, and the ruler over the kings of the earth. To Him who loved us and washed us from our sins in His own blood, and has made us kings and priests to His God and Father, to Him be glory and dominion forever and ever. Amen.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 2,
		verse: '1 John 5:11-12',
		text: 'And this is the testimony: that God has given us eternal life, and this life is in His Son. He who has the Son has life; he who does not have the Son of God does not have life.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 3,
		verse: '1 John 5:1, 4-5',
		text: 'Whoever believes that Jesus is the Christ is born of God, and everyone who loves Him who begot also loves him who is begotten of Him. For whatever is born of God overcomes the world. And this is the victory that has overcome the world—our faith. Who is he who overcomes the world, but he who believes that Jesus is the Son of God?',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 4,
		verse: '1 John 4:15',
		text: 'Whoever confesses that Jesus is the Son of God, God abides in him, and he in God.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 5,
		verse: '1 John 4:10',
		text: 'In this is love, not that we loved God, but that He loved us and sent His Son to be the propitiation for our sins.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 6,
		verse: '1 John 4:4',
		text: 'You are of God, little children, and have overcome them, because He who is in you is greater than he who is in the world.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 7,
		verse: '1 John 3:14',
		text: 'We know that we have passed from death to life, because we love the brethren. He who does not love his brother abides in death.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 8,
		verse: '1 John 3:2',
		text: 'Beloved, now we are children of God; and it has not yet been revealed what we shall be, but we know that when He is revealed, we shall be like Him, for we shall see Him as He is.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 9,
		verse: '1 John 2:1',
		text: 'My little children, these things I write to you, so that you may not sin. And if anyone sins, we have an Advocate with the Father, Jesus Christ the righteous.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 10,
		verse: '1 John 1:9',
		text: 'For Christ also suffered once for sins, the just for the unjust, that He might bring us to God, being put to death in the flesh but made alive by the Spirit',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 11,
		verse: '1 Peter 3:18',
		text: '',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 12,
		verse: '1 Peter 2:9, 1 Peter 2:21',
		text: 'But you are a chosen generation, a royal priesthood, a holy nation, His own special people, that you may proclaim the praises of Him who called you out of darkness into His marvelous light; For to this you were called, because Christ also suffered for us, leaving us an example, that you should follow His steps',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 13,
		verse: 'James 4:7',
		text: 'Therefore submit to God. Resist the devil and he will flee from you.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 14,
		verse: 'Heb. 13:8',
		text: 'Jesus Christ is the same yesterday, today, and forever.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 15,
		verse: 'Heb. 13:5-6',
		text: 'Let your conduct be without covetousness; be content with such things as you have. For He Himself has said, “I will never leave you nor forsake you.” So we may boldly say: “The Lord is my helper; I will not fear. What can man do to me?”',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 16,
		verse: 'Heb. 10:14',
		text: 'For by one offering He has perfected forever those who are being sanctified.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 17,
		verse: 'Heb. 9:28',
		text: 'so Christ was offered once to bear the sins of many. To those who eagerly wait for Him He will appear a second time, apart from sin, for salvation.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 18,
		verse: 'Heb. 9:24',
		text: 'For Christ has not entered the holy places made with hands, which are copies of the true, but into heaven itself, now to appear in the presence of God for us',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 19,
		verse: 'Heb. 8:6',
		text: 'But now He has obtained a more excellent ministry, inasmuch as He is also Mediator of a better covenant, which was established on better promises.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 20,
		verse: 'Heb. 7:19, 22',
		text: 'for the law made nothing perfect; on the other hand, there is the bringing in of a better hope, through which we draw near to God. to whom also Abraham gave a tenth part of all, first being translated “king of righteousness,” and then also king of Salem, meaning “king of peace”',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 21,
		verse: 'Heb. 4:14-16',
		text: 'For in that He Himself has suffered, being tempted, He is able to aid those who are tempted.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 22,
		verse: 'Heb. 2:18',
		text: 'For in that He Himself has suffered, being tempted, He is able to aid those who are tempted.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 23,
		verse: 'Heb. 2:14-15',
		text: 'Inasmuch then as the children have partaken of flesh and blood, He Himself likewise shared in the same, that through death He might destroy him who had the power of death, that is, the devil, and release those who through fear of death were all their lifetime subject to bondage.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 24,
		verse: 'Heb. 2:9-11',
		text: 'But we see Jesus, who was made a little lower than the angels, for the suffering of death crowned with glory and honor, that He, by the grace of God, might taste death for everyone. For it was fitting for Him, for whom are all things and by whom are all things, in bringing many sons to glory, to make the captain of their salvation perfect through sufferings. For both He who sanctifies and those who are being sanctified are all of one, for which reason He is not ashamed to call them brethren',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 25,
		verse: 'Titus 3:7',
		text: 'that having been justified by His grace we should become heirs according to the hope of eternal life.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 26,
		verse: 'Titus 2:14',
		text: 'who gave Himself for us, that He might redeem us from every lawless deed and purify for Himself His own special people, zealous for good works.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 27,
		verse: 'Col. 1:26-27',
		text: 'the mystery which has been hidden from ages and from generations, but now has been revealed to His saints. To them God willed to make known what are the riches of the glory of this mystery among the Gentiles: which is Christ in you, the hope of glory.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 28,
		verse: 'Col. 1:13',
		text: 'He has delivered us from the power of darkness and conveyed us into the kingdom of the Son of His love,',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 29,
		verse: 'Phil. 2:13',
		text: 'for it is God who works in you both to will and to do for His good pleasure.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 30,
		verse: 'Phil. 2:5',
		text: 'Let this mind be in you which was also in Christ Jesus',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 31,
		verse: 'Gal. 5.1',
		text: 'Stand fast therefore in the liberty by which Christ has made us free, and do not be entangled again with a yoke of bondage.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 32,
		verse: 'Gal. 3.29',
		text: 'I in them, and You in Me; that they may be made perfect in one, and that the world may know that You have sent Me, and have loved them as You have loved Me.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 33,
		verse: 'John 17:23',
		text: 'I in them, and You in Me; that they may be made perfect in one, and that the world may know that You have sent Me, and have loved them as You have loved Me.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 34,
		verse: 'John 14:23',
		text: 'Jesus answered and said to him, “If anyone loves Me, he will keep My word; and My Father will love him, and We will come to him and make Our home with him.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 35,
		verse: 'John 14:12',
		text: 'Most assuredly, I say to you, he who believes in Me, the works that I do he will do also; and greater works than these he will do, because I go to My Father.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 36,
		verse: 'John 10:10',
		text: 'The thief does not come except to steal, and to kill, and to destroy. I have come that they may have life, and that they may have it more abundantly.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 37,
		verse: 'John 6:40',
		text: 'And this is the will of Him who sent Me, that everyone who sees the Son and believes in Him may have everlasting life; and I will raise him up at the last day.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 38,
		verse: 'John 4:14',
		text: 'but whoever drinks of the water that I shall give him will never thirst. But the water that I shall give him will become in him a fountain of water springing up into everlasting life.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 39,
		verse: 'Luke 10:19',
		text: 'Behold, I give you the authority to trample on serpents and scorpions, and over all the power of the enemy, and nothing shall by any means hurt you.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 40,
		verse: 'Mark 11:23-24',
		text: 'For assuredly, I say to you, whoever says to this mountain, \'Be removed and be cast into the sea,\' and does not doubt in his heart, but believes that those things he says will be done, he will have whatever he says. Therefore I say to you, whatever things you ask when you pray, believe that you receive them, and you will have them.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 41,
		verse: 'Mark 9:23',
		text: 'Jesus said to him, “If you can believe, all things are possible to him who believes.”',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 42,
		verse: 'Mark 1:8',
		text: 'I indeed baptized you with water, but He will baptize you with the Holy Spirit.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 43,
		verse: 'Matt. 28:18-20',
		text: 'And Jesus came and spoke to them, saying, “All authority has been given to Me in heaven and on earth. Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age.” Amen.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 44,
		verse: 'Matt. 18:18-20',
		text: '“Assuredly, I say to you, whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed in heaven. “Again I say to you that if two of you agree on earth concerning anything that they ask, it will be done for them by My Father in heaven. For where two or three are gathered together in My name, I am there in the midst of them.”',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 45,
		verse: 'Matt. 18:11',
		text: 'For the Son of Man has come to save that which was lost.',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 46,
		verse: 'Matt. 11:28-30',
		text: 'Come to Me, all you who labor and are heavy laden, and I will give you rest. Take My yoke upon you and learn from Me, for I am gentle and lowly in heart, and you will find rest for your souls. For My yoke is easy and My burden is light.”',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 47,
		verse: 'Matt. 8:17',
		text: 'that it might be fulfilled which was spoken by Isaiah the prophet, saying: “He Himself took our infirmities And bore our sicknesses.”',
		category: 'Who you are/what you are/ what you have BECAUSE OF CHRIST'
	},
	{
		id: 48,
		verse: 'Rom. 3:24',
		text: 'being justified freely by His grace through the redemption that is in Christ Jesus,',
		category: 'In Christ'
	},
	{
		id: 49,
		verse: 'Rom. 8:1',
		text: 'There is therefore now no condemnation to those who are in Christ Jesus, who do not walk according to the flesh, but according to the Spirit.',
		category: 'In Christ'
	},
	{
		id: 50,
		verse: 'Rom. 8:2',
		text: 'For the law of the Spirit of life in Christ Jesus has made me free from the law of sin and death.',
		category: 'In Christ'
	},
	{
		id: 51,
		verse: 'Rom. 12:5',
		text: 'so we, being many, are one body in Christ, and individually members of one another.',
		category: 'In Christ'
	},
	{
		id: 52,
		verse: '1 Cor. 1:2',
		text: 'To the church of God which is at Corinth, to those who are sanctified in Christ Jesus, called to be saints, with all who in every place call on the name of Jesus Christ our Lord, both theirs and ours',
		category: 'In Christ'
	},
	{
		id: 53,
		verse: '1 Cor. 1:30',
		text: 'But of Him you are in Christ Jesus, who became for us wisdom from God—and righteousness and sanctification and redemption',
		category: 'In Christ'
	},
	{
		id: 54,
		verse: '1 Cor. 15:22',
		text: 'For as in Adam all die, even so in Christ all shall be made alive.',
		category: 'In Christ'
	},
	{
		id: 55,
		verse: '2 Cor. 1:21',
		text: 'Now He who establishes us with you in Christ and has anointed us is God',
		category: 'In Christ'
	},
	{
		id: 56,
		verse: '2 Cor. 2:14',
		text: 'Now thanks be to God who always leads us in triumph in Christ, and through us diffuses the fragrance of His knowledge in every place.',
		category: 'In Christ'
	},
	{
		id: 57,
		verse: '2 Cor. 3:14',
		text: 'But their minds were blinded. For until this day the same veil remains unlifted in the reading of the Old Testament, because the veil is taken away in Christ.',
		category: 'In Christ'
	},
	{
		id: 58,
		verse: '2 Cor. 5:17',
		text: 'Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.',
		category: 'In Christ'
	},
	{
		id: 59,
		verse: '2 Cor. 5:19',
		text: 'that is, that God was in Christ reconciling the world to Himself, not imputing their trespasses to them, and has committed to us the word of reconciliation.',
		category: 'In Christ'
	},
	{
		id: 60,
		verse: 'Gal. 2:4',
		text: 'And this occurred because of false brethren secretly brought in (who came in by stealth to spy out our liberty which we have in Christ Jesus, that they might bring us into bondage)',
		category: 'In Christ'
	},
	{
		id: 61,
		verse: 'Gal. 3:26',
		text: 'For you are all sons of God through faith in Christ Jesus.',
		category: 'In Christ'
	},
	{
		id: 62,
		verse: 'Gal. 3:28',
		text: 'There is neither Jew nor Greek, there is neither slave nor free, there is neither male nor female; for you are all one in Christ Jesus.',
		category: 'In Christ'
	},
	{
		id: 63,
		verse: 'Gal. 5:6',
		text: 'For in Christ Jesus neither circumcision nor uncircumcision avails anything, but faith working through love.',
		category: 'In Christ'
	},
	{
		id: 64,
		verse: 'Gal. 6:15',
		text: 'For in Christ Jesus neither circumcision nor uncircumcision avails anything, but a new creation.',
		category: 'In Christ'
	},
	{
		id: 65,
		verse: 'Eph. 1:3',
		text: 'Blessed be the God and Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenly places in Christ',
		category: 'In Christ'
	},
	{
		id: 66,
		verse: 'Eph. 1:10',
		text: 'that in the dispensation of the fullness of the times He might gather together in one all things in Christ, both which are in heaven and which are on earth—in Him.',
		category: 'In Christ'
	},
	{
		id: 67,
		verse: 'Eph. 2:6',
		text: 'and raised us up together, and made us sit together in the heavenly places in Christ Jesus',
		category: 'In Christ'
	},
	{
		id: 68,
		verse: 'Eph. 2:10',
		text: 'For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand that we should walk in them.',
		category: 'In Christ'
	},
	{
		id: 69,
		verse: 'Eph. 2:13',
		text: 'But now in Christ Jesus you who once were far off have been brought near by the blood of Christ.',
		category: 'In Christ'
	},
	{
		id: 70,
		verse: 'Eph. 3:6',
		text: 'that the Gentiles should be fellow heirs, of the same body, and partakers of His promise in Christ through the gospel',
		category: 'In Christ'
	},
	{
		id: 71,
		verse: 'Phil. 3:13-14',
		text: 'Brethren, I do not count myself to have apprehended; but one thing I do, forgetting those things which are behind and reaching forward to those things which are ahead, I press toward the goal for the prize of the upward call of God in Christ Jesus.',
		category: 'In Christ'
	},
	{
		id: 72,
		verse: 'Col. 1:28',
		text: 'Him we preach, warning every man and teaching every man in all wisdom, that we may present every man perfect in Christ Jesus.',
		category: 'In Christ'
	},
	{
		id: 73,
		verse: '1 Thess. 4:16',
		text: 'For the Lord Himself will descend from heaven with a shout, with the voice of an archangel, and with the trumpet of God. And the dead in Christ will rise first.',
		category: 'In Christ'
	},
	{
		id: 74,
		verse: '1 Thess. 5:18',
		text: 'in everything give thanks; for this is the will of God in Christ Jesus for you.',
		category: 'In Christ'
	},
	{
		id: 75,
		verse: '1 Tim. 1:14',
		text: 'And the grace of our Lord was exceedingly abundant, with faith and love which are in Christ Jesus.',
		category: 'In Christ'
	},
	{
		id: 76,
		verse: '2 Tim. 1:9',
		text: 'who has saved us and called us with a holy calling, not according to our works, but according to His own purpose and grace which was given to us in Christ Jesus before time began',
		category: 'In Christ'
	},
	{
		id: 77,
		verse: '2 Tim. 1:13',
		text: 'Hold fast the pattern of sound words which you have heard from me, in faith and love which are in Christ Jesus.',
		category: 'In Christ'
	},
	{
		id: 78,
		verse: '2 Tim. 2:1',
		text: 'You therefore, my son, be strong in the grace that is in Christ Jesus.',
		category: 'In Christ'
	},
	{
		id: 79,
		verse: '2 Tim. 2:10',
		text: 'Therefore I endure all things for the sake of the elect, that they also may obtain the salvation which is in Christ Jesus with eternal glory.',
		category: 'In Christ'
	},
	{
		id: 80,
		verse: '2 Tim. 3:15',
		text: 'and that from childhood you have known the Holy Scriptures, which are able to make you wise for salvation through faith which is in Christ Jesus.',
		category: 'In Christ'
	},
	{
		id: 81,
		verse: 'Philem. 1:6',
		text: 'that the sharing of your faith may become effective by the acknowledgment of every good thing which is in you in Christ Jesus.',
		category: 'In Christ'
	},
	{
		id: 82,
		verse: '2 Peter 1:8',
		text: 'For if these things are yours and abound, you will be neither barren nor unfruitful in the knowledge of our Lord Jesus Christ.',
		category: 'In Christ'
	},
	{
		id: 83,
		verse: '2 John 1:9',
		text: 'Whoever transgresses and does not abide in the doctrine of Christ does not have God. He who abides in the doctrine of Christ has both the Father and the Son.',
		category: 'In Christ'
	},
	{
		id: 84,
		verse: 'Acts 17:28',
		text: 'for in Him we live and move and have our being, as also some of your own poets have said, \'For we are also His offspring.\'',
		category: 'In Him'
	},
	{
		id: 85,
		verse: 'John 1:4',
		text: 'In Him was life, and the life was the light of men.',
		category: 'In Him'
	},
	{
		id: 86,
		verse: 'John 3:15-16',
		text: 'that whoever believes in Him should not perish but have eternal life. For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.',
		category: 'In Him'
	},
	{
		id: 87,
		verse: '2 Cor. 1:20',
		text: 'For all the promises of God in Him are Yes, and in Him Amen, to the glory of God through us.',
		category: 'In Him'
	},
	{
		id: 88,
		verse: '2 Cor. 5:21',
		text: 'For He made Him who knew no sin to be sin for us, that we might become the righteousness of God in Him.',
		category: 'In Him'
	},
	{
		id: 89,
		verse: 'Eph. 1:4',
		text: 'just as He chose us in Him before the foundation of the world, that we should be holy and without blame before Him in love',
		category: 'In Him'
	},
	{
		id: 90,
		verse: 'Eph. 1:10',
		text: 'that in the dispensation of the fullness of the times He might gather together in one all things in Christ, both which are in heaven and which are on earth—in Him.',
		category: 'In Him'
	},
	{
		id: 91,
		verse: 'Phil. 3:9',
		text: 'and be found in Him, not having my own righteousness, which is from the law, but that which is through faith in Christ, the righteousness which is from God by faith',
		category: 'In Him'
	},
	{
		id: 92,
		verse: 'Col. 2:6',
		text: 'As you therefore have received Christ Jesus the Lord, so walk in Him',
		category: 'In Him'
	},
	{
		id: 93,
		verse: 'Col. 2:7',
		text: 'rooted and built up in Him and established in the faith, as you have been taught, abounding in it with thanksgiving.',
		category: 'In Him'
	},
	{
		id: 94,
		verse: 'Col. 2:10',
		text: 'rooted and built up in Him and established in the faith, as you have been taught, abounding in it with thanksgiving.',
		category: 'In Him'
	},
	{
		id: 95,
		verse: '1 John 2:5',
		text: 'But whoever keeps His word, truly the love of God is perfected in him. By this we know that we are in Him.',
		category: 'In Him'
	},
	{
		id: 96,
		verse: '1 John 2:6',
		text: 'He who says he abides in Him ought himself also to walk just as He walked.',
		category: 'In Him'
	},
	{
		id: 97,
		verse: '1 John 2:8',
		text: 'Again, a new commandment I write to you, which thing is true in Him and in you, because the darkness is passing away, and the true light is already shining.',
		category: 'In Him'
	},
	{
		id: 98,
		verse: '1 John 2:27',
		text: 'But the anointing which you have received from Him abides in you, and you do not need that anyone teach you; but as the same anointing teaches you concerning all things, and is true, and is not a lie, and just as it has taught you, you will abide in Him.',
		category: 'In Him'
	},
	{
		id: 99,
		verse: '1 John 2:28',
		text: 'And now, little children, abide in Him, that when He appears, we may have confidence and not be ashamed before Him at His coming.',
		category: 'In Him'
	},
	{
		id: 100,
		verse: '1 John 3:3',
		text: 'And everyone who has this hope in Him purifies himself, just as He is pure.',
		category: 'In Him'
	},
	{
		id: 101,
		verse: '1 John 3:5',
		text: 'And you know that He was manifested to take away our sins, and in Him there is no sin.',
		category: 'In Him'
	},
	{
		id: 102,
		verse: '1 John 3:6',
		text: 'Whoever abides in Him does not sin. Whoever sins has neither seen Him nor known Him.',
		category: 'In Him'
	},
	{
		id: 103,
		verse: '1 John 3:24',
		text: 'Now he who keeps His commandments abides in Him, and He in him. And by this we know that He abides in us, by the Spirit whom He has given us.',
		category: 'In Him'
	},
	{
		id: 104,
		verse: '1 John 4:13',
		text: 'Now he who keeps His commandments abides in Him, and He in him. And by this we know that He abides in us, by the Spirit whom He has given us.',
		category: 'In Him'
	},
	{
		id: 105,
		verse: '1 John 5:14-15',
		text: 'Now this is the confidence that we have in Him, that if we ask anything according to His will, He hears us. And if we know that He hears us, whatever we ask, we know that we have the petitions that we have asked of Him.',
		category: 'In Him'
	},
	{
		id: 106,
		verse: '1 John 5:20',
		text: 'And we know that the Son of God has come and has given us an understanding, that we may know Him who is true; and we are in Him who is true, in His Son Jesus Christ. This is the true God and eternal life.',
		category: 'In Him'
	},
	{
		id: 107,
		verse: 'Eph. 1:6',
		text: 'to the praise of the glory of His grace, by which He made us accepted in the Beloved.',
		category: 'In the Beloved'
	},
	{
		id: 108,
		verse: 'Eph. 5:8',
		text: 'For you were once darkness, but now you are light in the Lord. Walk as children of light',
		category: 'In the Lord'
	},
	{
		id: 109,
		verse: 'Eph. 6:10',
		text: 'Finally, my brethren, be strong in the Lord and in the power of His might.',
		category: 'In the Lord'
	},
	{
		id: 110,
		verse: 'Eph. 1:7',
		text: 'In Him we have redemption through His blood, the forgiveness of sins, according to the riches of His grace',
		category: 'In Him'
	},
	{
		id: 111,
		verse: 'Eph. 1:11',
		text: 'In Him also we have obtained an inheritance, being predestined according to the purpose of Him who works all things according to the counsel of His will',
		category: 'In Him'
	},
	{
		id: 112,
		verse: 'Eph. 1:13',
		text: 'In Him you also trusted, after you heard the word of truth, the gospel of your salvation; in whom also, having believed, you were sealed with the Holy Spirit of promise',
		category: 'In Him'
	},
	{
		id: 113,
		verse: 'Eph. 2:21',
		text: 'in whom the whole building, being fitted together, grows into a holy temple in the Lord',
		category: 'In Whom'
	},
	{
		id: 114,
		verse: 'Eph. 2:22',
		text: 'in whom you also are being built together for a dwelling place of God in the Spirit.',
		category: 'In Whom'
	},
	{
		id: 115,
		verse: 'Eph. 3:12',
		text: 'in whom we have boldness and access with confidence through faith in Him.',
		category: 'In Whom'
	},
	{
		id: 116,
		verse: 'Col. 1:14',
		text: 'in whom we have redemption through His blood, the forgiveness of sins.',
		category: 'In Whom'
	},
	{
		id: 117,
		verse: 'Col. 2:3',
		text: 'in whom are hidden all the treasures of wisdom and knowledge.',
		category: 'In Whom'
	},
	{
		id: 118,
		verse: 'Col. 2:11',
		text: 'In Him you were also circumcised with the circumcision made without hands, by putting off the body of the sins of the flesh, by the circumcision of Christ,',
		category: 'In Him'
	},
	{
		id: 119,
		verse: '1 Peter 1:8',
		text: 'whom having not seen you love. Though now you do not see Him, yet believing, you rejoice with joy inexpressible and full of glory',
		category: 'In Whom'
	},
	{
		id: 120,
		verse: 'Rom. 3:22',
		text: 'even the righteousness of God, through faith in Jesus Christ, to all and on all who believe. For there is no difference',
		category: 'By Christ'
	},
	{
		id: 121,
		verse: 'Rom. 5:15',
		text: 'But the free gift is not like the offense. For if by the one man\'s offense many died, much more the grace of God and the gift by the grace of the one Man, Jesus Christ, abounded to many.',
		category: 'By Christ'
	},
	{
		id: 122,
		verse: 'Rom. 5:17-19',
		text: 'For if by the one man\'s offense death reigned through the one, much more those who receive abundance of grace and of the gift of righteousness will reign in life through the One, Jesus Christ.) Therefore, as through one man\'s offense judgment came to all men, resulting in condemnation, even so through one Man\'s righteous act the free gift came to all men, resulting in justification of life. For as by one man\'s disobedience many were made sinners, so also by one Man\'s obedience many will be made righteous.',
		category: 'By Christ'
	},
	{
		id: 123,
		verse: 'Rom. 7:4',
		text: 'Therefore, my brethren, you also have become dead to the law through the body of Christ, that you may be married to another—to Him who was raised from the dead, that we should bear fruit to God.',
		category: 'By Christ'
	},
	{
		id: 124,
		verse: '1 Cor. 1:4',
		text: 'I thank my God always concerning you for the grace of God which was given to you by Christ Jesus',
		category: 'By Christ'
	},
	{
		id: 125,
		verse: '2 Cor. 5:18',
		text: 'Now all things are of God, who has reconciled us to Himself through Jesus Christ, and has given us the ministry of reconciliation',
		category: 'By Christ'
	},
	{
		id: 126,
		verse: 'Gal. 2:16',
		text: 'knowing that a man is not justified by the works of the law but by faith in Jesus Christ, even we have believed in Christ Jesus, that we might be justified by faith in Christ and not by the works of the law; for by the works of the law no flesh shall be justified.',
		category: 'By Christ'
	},
	{
		id: 127,
		verse: 'Eph. 1:5',
		text: 'having predestined us to adoption as sons by Jesus Christ to Himself, according to the good pleasure of His will',
		category: 'By Christ'
	},
	{
		id: 128,
		verse: 'Phil. 1:11',
		text: 'being filled with the fruits of righteousness which are by Jesus Christ, to the glory and praise of God.',
		category: 'By Christ'
	},
	{
		id: 129,
		verse: 'Phil. 4:19',
		text: 'And my God shall supply all your need according to His riches in glory by Christ Jesus.',
		category: 'By Christ'
	},
	{
		id: 130,
		verse: '1 Peter 1:3',
		text: 'Blessed be the God and Father of our Lord Jesus Christ, who according to His abundant mercy has begotten us again to a living hope through the resurrection of Jesus Christ from the dead',
		category: 'By Christ'
	},
	{
		id: 131,
		verse: '1 Peter 2:5',
		text: 'you also, as living stones, are being built up a spiritual house, a holy priesthood, to offer up spiritual sacrifices acceptable to God through Jesus Christ.',
		category: 'By Christ'
	},
	{
		id: 132,
		verse: '1 Peter 5:10',
		text: 'But may the God of all grace, who called us to His eternal glory by Christ Jesus, after you have suffered a while, perfect, establish, strengthen, and settle you.',
		category: 'By Christ'
	},
	{
		id: 133,
		verse: '1 Cor. 1:5',
		text: 'that you were enriched in everything by Him in all utterance and all knowledge,',
		category: 'By Him'
	},
	{
		id: 134,
		verse: '1 Cor. 8:6',
		text: 'yet for us there is one God, the Father, of whom are all things, and we for Him; and one Lord Jesus Christ, through whom are all things, and through whom we live.',
		category: 'By Him'
	},
	{
		id: 135,
		verse: 'Col. 1:16',
		text: 'For by Him all things were created that are in heaven and that are on earth, visible and invisible, whether thrones or dominions or principalities or powers. All things were created through Him and for Him.',
		category: 'By Him'
	},
	{
		id: 136,
		verse: 'Col. 1:17',
		text: 'And He is before all things, and in Him all things consist.',
		category: 'By Him'
	},
	{
		id: 137,
		verse: 'Col. 1:20',
		text: 'and by Him to reconcile all things to Himself, by Him, whether things on earth or things in heaven, having made peace through the blood of His cross.',
		category: 'By Him'
	},
	{
		id: 138,
		verse: 'Col. 3:17',
		text: 'And whatever you do in word or deed, do all in the name of the Lord Jesus, giving thanks to God the Father through Him.',
		category: 'By Him'
	},
	{
		id: 139,
		verse: 'Heb. 7:25',
		text: 'Therefore He is also able to save to the uttermost those who come to God through Him, since He always lives to make intercession for them.',
		category: 'By Him'
	},
	{
		id: 140,
		verse: 'Heb. 13:15',
		text: 'Therefore by Him let us continually offer the sacrifice of praise to God, that is, the fruit of our lips, giving thanks to His name.',
		category: 'By Him'
	},
	{
		id: 141,
		verse: '1 Peter 1:21',
		text: 'who through Him believe in God, who raised Him from the dead and gave Him glory, so that your faith and hope are in God.',
		category: 'By Him'
	},
	{
		id: 142,
		verse: 'Heb. 1:3',
		text: 'who being the brightness of His glory and the express image of His person, and upholding all things by the word of His power, when He had by Himself purged our sins, sat down at the right hand of the Majesty on high,',
		category: 'By Himself'
	},
	{
		id: 143,
		verse: 'Heb. 9:26',
		text: 'He then would have had to suffer often since the foundation of the world; but now, once at the end of the ages, He has appeared to put away sin by the sacrifice of Himself.',
		category: 'By Himself'
	},
	{
		id: 144,
		verse: 'Heb. 9:11-12',
		text: 'But Christ came as High Priest of the good things to come, with the greater and more perfect tabernacle not made with hands, that is, not of this creation. Not with the blood of goats and calves, but with His own blood He entered the Most Holy Place once for all, having obtained eternal redemption.',
		category: 'By His Blood'
	},
	{
		id: 145,
		verse: 'Heb. 9:14-15',
		text: 'how much more shall the blood of Christ, who through the eternal Spirit offered Himself without spot to God, cleanse your conscience from dead works to serve the living God? And for this reason He is the Mediator of the new covenant, by means of death, for the redemption of the transgressions under the first covenant, that those who are called may receive the promise of the eternal inheritance.',
		category: 'By His Blood'
	},
	{
		id: 146,
		verse: 'Heb. 10:19-20',
		text: 'Therefore, brethren, having boldness to enter the Holiest by the blood of Jesus, by a new and living way which He consecrated for us, through the veil, that is, His flesh',
		category: 'By His Blood'
	},
	{
		id: 147,
		verse: '1 John 1:7',
		text: 'But if we walk in the light as He is in the light, we have fellowship with one another, and the blood of Jesus Christ His Son cleanses us from all sin.',
		category: 'By His Blood'
	},
	{
		id: 148,
		verse: 'Rom. 5:2',
		text: 'through whom also we have access by faith into this grace in which we stand, and rejoice in hope of the glory of God.',
		category: 'By Whom'
	},
	{
		id: 149,
		verse: 'Rom. 5:11',
		text: 'And not only that, but we also rejoice in God through our Lord Jesus Christ, through whom we have now received the reconciliation.',
		category: 'By Whom'
	},
	{
		id: 150,
		verse: 'Gal. 6:14',
		text: 'But God forbid that I should boast except in the cross of our Lord Jesus Christ, by whom the world has been crucified to me, and I to the world.',
		category: 'By Whom'
	},
	{
		id: 151,
		verse: 'Eph. 4:16',
		text: 'from whom the whole body, joined and knit together by what every joint supplies, according to the effective working by which every part does its share, causes growth of the body for the edifying of itself in love.',
		category: 'From Whom'
	},
	{
		id: 152,
		verse: 'Gal. 6:14',
		text: 'and not holding fast to the Head, from whom all the body, nourished and knit together by joints and ligaments, grows with the increase that is from God.',
		category: 'From Whom'
	},
	{
		id: 153,
		verse: '2 Cor. 2:15',
		text: 'For we are to God the fragrance of Christ among those who are being saved and among those who are perishing.',
		category: 'Of Christ'
	},
	{
		id: 154,
		verse: 'Phil. 3:12',
		text: 'Not that I have already attained, or am already perfected; but I press on, that I may lay hold of that for which Christ Jesus has also laid hold of me.',
		category: 'Of Christ'
	},
	{
		id: 155,
		verse: 'Col. 2:17',
		text: 'which are a shadow of things to come, but the substance is of Christ.',
		category: 'Of Christ'
	},
	{
		id: 156,
		verse: 'Col. 3:24',
		text: 'knowing that from the Lord you will receive the reward of the inheritance; for you serve the Lord Christ.',
		category: 'Of Christ'
	},
	{
		id: 157,
		verse: '1 John 1:5',
		text: 'This is the message which we have heard from Him and declare to you, that God is light and in Him is no darkness at all.',
		category: 'Of Him'
	},
	{
		id: 158,
		verse: '1 John 2:27',
		text: 'But the anointing which you have received from Him abides in you, and you do not need that anyone teach you; but as the same anointing teaches you concerning all things, and is true, and is not a lie, and just as it has taught you, you will abide in Him.',
		category: 'Of Him'
	},
	{
		id: 159,
		verse: 'Rom. 5:1',
		text: 'Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ,',
		category: 'Through Christ'
	},
	{
		id: 160,
		verse: 'Rom. 5:11',
		text: 'And not only that, but we also rejoice in God through our Lord Jesus Christ, through whom we have now received the reconciliation.',
		category: 'Through Christ'
	},
	{
		id: 161,
		verse: 'Rom. 6:11',
		text: 'Likewise you also, reckon yourselves to be dead indeed to sin, but alive to God in Christ Jesus our Lord.',
		category: 'Through Christ'
	},
	{
		id: 162,
		verse: 'Rom. 6:23',
		text: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
		category: 'Through Christ'
	},
	{
		id: 163,
		verse: '1 Cor. 15:57',
		text: 'But thanks be to God, who gives us the victory through our Lord Jesus Christ.',
		category: 'Through Christ'
	},
	{
		id: 164,
		verse: 'Gal. 3:13-14',
		text: 'Christ has redeemed us from the curse of the law, having become a curse for us (for it is written, “Cursed is everyone who hangs on a tree”), that the blessing of Abraham might come upon the Gentiles in Christ Jesus, that we might receive the promise of the Spirit through faith.',
		category: 'Through Christ'
	},
	{
		id: 165,
		verse: 'Gal. 4:7',
		text: 'Therefore you are no longer a slave but a son, and if a son, then an heir of God through Christ.',
		category: 'Through Christ'
	},
	{
		id: 166,
		verse: 'Eph. 2:7',
		text: 'that in the ages to come He might show the exceeding riches of His grace in His kindness toward us in Christ Jesus.',
		category: 'Through Christ'
	},
	{
		id: 167,
		verse: 'Phil. 4:6-7',
		text: 'Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.',
		category: 'Through Christ'
	},
	{
		id: 168,
		verse: 'Phil. 4:13',
		text: 'I can do all things through Christ who strengthens me.',
		category: 'Through Christ'
	},
	{
		id: 169,
		verse: 'Heb. 10:10',
		text: 'By that will we have been sanctified through the offering of the body of Jesus Christ once for all.',
		category: 'Through Christ'
	},
	{
		id: 170,
		verse: 'Heb. 13:20-21',
		text: 'Now may the God of peace who brought up our Lord Jesus from the dead, that great Shepherd of the sheep, through the blood of the everlasting covenant, make you complete in every good work to do His will, working in you what is well pleasing in His sight, through Jesus Christ, to whom be glory forever and ever. Amen.',
		category: 'Through Christ'
	},
	{
		id: 171,
		verse: 'John 3:17',
		text: 'For God did not send His Son into the world to condemn the world, but that the world through Him might be saved.',
		category: 'Through Him'
	},
	{
		id: 172,
		verse: 'Rom. 5:9',
		text: 'Much more then, having now been justified by His blood, we shall be saved from wrath through Him.',
		category: 'Through Him'
	},
	{
		id: 173,
		verse: 'Rom. 8:37',
		text: 'Yet in all these things we are more than conquerors through Him who loved us.',
		category: 'Through Him'
	},
	{
		id: 174,
		verse: '1 John 4:9',
		text: 'In this the love of God was manifested toward us, that God has sent His only begotten Son into the world, that we might live through Him.',
		category: 'Through Him'
	},
	{
		id: 175,
		verse: 'Rom. 6:8',
		text: 'Now if we died with Christ, we believe that we shall also live with Him',
		category: 'With Christ'
	},
	{
		id: 176,
		verse: 'Gal. 2:20',
		text: 'I have been crucified with Christ; it is no longer I who live, but Christ lives in me; and the life which I now live in the flesh I live by faith in the Son of God, who loved me and gave Himself for me.',
		category: 'With Christ'
	},
	{
		id: 177,
		verse: 'Eph. 2:5',
		text: 'even when we were dead in trespasses, made us alive together with Christ (by grace you have been saved)',
		category: 'With Christ'
	},
	{
		id: 178,
		verse: 'Col. 2:20',
		text: 'Therefore, if you died with Christ from the basic principles of the world, why, as though living in the world, do you subject yourselves to regulations—',
		category: 'With Christ'
	},
	{
		id: 179,
		verse: 'Rom. 6:4',
		text: 'Therefore we were buried with Him through baptism into death, that just as Christ was raised from the dead by the glory of the Father, even so we also should walk in newness of life.',
		category: 'With Him'
	},
	{
		id: 180,
		verse: 'Rom. 6:6',
		text: 'knowing this, that our old man was crucified with Him, that the body of sin might be done away with, that we should no longer be slaves of sin.',
		category: 'With Him'
	},
	{
		id: 181,
		verse: 'Rom. 6:8',
		text: 'Now if we died with Christ, we believe that we shall also live with Him',
		category: 'With Him'
	},
	{
		id: 182,
		verse: 'Rom. 8:32',
		text: 'He who did not spare His own Son, but delivered Him up for us all, how shall He not with Him also freely give us all things?',
		category: 'With Him'
	},
	{
		id: 183,
		verse: '2 Cor. 13:4',
		text: 'For though He was crucified in weakness, yet He lives by the power of God. For we also are weak in Him, but we shall live with Him by the power of God toward you.',
		category: 'With Him'
	},
	{
		id: 184,
		verse: 'Col. 2:12',
		text: 'buried with Him in baptism, in which you also were raised with Him through faith in the working of God, who raised Him from the dead.',
		category: 'With Him'
	},
	{
		id: 185,
		verse: 'John 6:57',
		text: 'As the living Father sent Me, and I live because of the Father, so he who feeds on Me will live because of Me.',
		category: 'By Me'
	},
	{
		id: 186,
		verse: 'John 14:6',
		text: 'Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.',
		category: 'By Me'
	},
	{
		id: 187,
		verse: 'John 6:56',
		text: 'He who eats My flesh and drinks My blood abides in Me, and I in him.',
		category: 'In Me'
	},
	{
		id: 188,
		verse: 'John 14:20',
		text: 'At that day you will know that I am in My Father, and you in Me, and I in you.',
		category: 'In Me'
	},
	{
		id: 189,
		verse: 'John 15:4-5',
		text: 'Abide in Me, and I in you. As the branch cannot bear fruit of itself, unless it abides in the vine, neither can you, unless you abide in Me. I am the vine, you are the branches. He who abides in Me, and I in him, bears much fruit; for without Me you can do nothing.',
		category: 'In Me'
	},
	{
		id: 190,
		verse: 'John 15:7-8',
		text: 'If you abide in Me, and My words abide in you, you will ask what you desire, and it shall be done for you. By this My Father is glorified, that you bear much fruit; so you will be My disciples.',
		category: 'In Me'
	},
	{
		id: 191,
		verse: 'John 16:33',
		text: 'These things I have spoken to you, that in Me you may have peace. In the world you will have tribulation; but be of good cheer, I have overcome the world.”',
		category: 'In Me'
	},
	{
		id: 192,
		verse: 'John 15:9',
		text: 'As the Father loved Me, I also have loved you; abide in My love.',
		category: 'In My Love'
	},
	{
		id: 193,
		verse: 'Matt. 18:20',
		text: 'For where two or three are gathered together in My name, I am there in the midst of them.',
		category: 'In His Name'
	},
	{
		id: 194,
		verse: 'Mark 16:17-18',
		text: 'And these signs will follow those who believe: In My name they will cast out demons; they will speak with new tongues; they will take up serpents; and if they drink anything deadly, it will by no means hurt them; they will lay hands on the sick, and they will recover.”',
		category: 'In His Name'
	},
	{
		id: 195,
		verse: 'John 14:13-14',
		text: 'And whatever you ask in My name, that I will do, that the Father may be glorified in the Son. If you ask anything in My name, I will do it.',
		category: 'In His Name'
	},
	{
		id: 196,
		verse: 'John 16:23-24',
		text: 'And in that day you will ask Me nothing. Most assuredly, I say to you, whatever you ask the Father in My name He will give you. Until now you have asked nothing in My name. Ask, and you will receive, that your joy may be full.',
		category: 'In His Name'
	},
	{
		id: 197,
		verse: '1 Cor. 6:11',
		text: 'And such were some of you. But you were washed, but you were sanctified, but you were justified in the name of the Lord Jesus and by the Spirit of our God.',
		category: 'In His Name'
	},
]

export default verses;