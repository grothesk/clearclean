	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="classical";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#1F2232";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#334628";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=10;bookConfig.largePageWidth=900;bookConfig.largePageHeight=1170;;bookConfig.securityType="1";bookConfig.CreatedTime ="201118100655";bookConfig.bookTitle="Titel Test CW CI";bookConfig.bookmarkCR="46d7fc6d989a3a19b6c77864b67c51a3858799f2";bookConfig.productName="Flip PDF";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "German",btnFirstPage:"Erste Seite",btnNextPage:"Nächste Seite",btnLastPage:"Letzte Seite",btnPrePage:"Vorige Seite",btnDownload:"herunterladen",btnPrint:"drucken",btnSearch:"suchen",btnClearSearch:"löschen",frmSearchPrompt:"Leeren",btnBookMark:"Inhaltsverzeichnis",btnHelp:"Hilfe",btnHome:"Startseite",btnFullScreen:"Vollbildmodus aktivieren",btnDisableFullScreen:"Vollbildmodus deaktivieren",btnSoundOn:"Sound anschalten",btnSoundOff:"Sound abschalten",btnShareEmail:"teilen",btnSocialShare:"Soziale Netzwerke",btnZoomIn:"vergrößern",btnZoomOut:"verkleinern",btnDragToMove:"Zoom per Mausrad",btnAutoFlip:"Autoflip",btnStopAutoFlip:"Autoflip stoppen",btnGoToHome:"Zurück zur Startseite",frmHelpCaption:"Hilfe",frmHelpTip1:"Zoom per Doppelklick",frmHelpTip2:"Sie können per Drag von Seite zu Seite blättern.",frmPrintCaption:"Druckfenster",frmPrintBtnCaption:"drucken",frmPrintPrintAll:"Alle Seiten drucken",frmPrintPrintCurrentPage:"Aktuelle Seite drucken",frmPrintPrintRange:"Druckbereich",frmPrintExampleCaption:"Beispiel: 2,5,8-26",frmPrintPreparePage:"Seite wird vorbereitet",frmPrintPrintFailed:"Fehler beim Drucken",pnlSearchInputInvalid:"Der Suchtext ist zu kurz.",loginCaption:"Passwort",loginInvalidPassword:"Falsches Passwort!",loginPasswordLabel:"Passwort:",loginBtnLogin:"einloggen",loginBtnCancel:"abbrechen",btnThumb:"Thumbnail",lblPages:"Seitenzahl",lblPagesFound:"die gesuchte Seite",lblPageIndex:"Seiten",btnAbout:"Über",frnAboutCaption:"Über uns",btnSinglePage:"Einzelseite",btnDoublePage:"Doppelseite",btnSwicthLanguage:"Sprache ändern",tipChangeLanguage:"Eine Sprache auswählen",btnMoreOptionsLeft:"Weitere Optionen",btnMoreOptionsRight:"Weitere Optionen",btnFit:"automatisch anpassen",smallModeCaption:"Im Vollbildmodus",btnAddAnnotation:"Anmerkung hinzufügen",btnAnnotation:"Anmerkungliste",FlipPageEditor_SaveAndExit:"speichern und beenden",FlipPageEditor_Exit:"beenden",DrawToolWindow_Redo:"wiederherstellen",DrawToolWindow_Undo:"rückgängig",DrawToolWindow_Clear:"löschen",DrawToolWindow_Brush:"Pinsel",DrawToolWindow_Width:"Pinselbreite",DrawToolWindow_Alpha:"Pinseltransparenz",DrawToolWindow_Color:"Pinselfarbe",DrawToolWindow_Eraser:"Radiergummi",DrawToolWindow_Rectangular:"Rechteck",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Randbreite",TStuff_BorderAlph:"Randtransparenz",TStuff_BorderColor:"Textfarbe",DrawToolWindow_TextNote:"Textanmerkung",AnnotMark:"Lesezeichen",lastpagebtnHelp:"Letzte Seite",firstpagebtnHelp:"Erste Seite",homebtnHelp:"Zurück zur Startseite",aboubtnHelp:"Über",screenbtnHelp:"Programm im Vollbildmodus starten",helpbtnHelp:"Hilfefenster öffnen",searchbtnHelp:"Suchen innerhalb einer Seite",pagesbtnHelp:"Thumbnail der Broschüre anschauen",bookmarkbtnHelp:"Lesezeichen öffnen",AnnotmarkbtnHelp:"Inhaltsverzeichnis öffnen",printbtnHelp:"Broschüre drucken",soundbtnHelp:"Sound anschalten oder abschalten",sharebtnHelp:"mailen",socialSharebtnHelp:"teilen",zoominbtnHelp:"zoomen",downloadbtnHelp:"Broschüre herunterladen",pagemodlebtnHelp:"Einzel- und Doppelseite",languagebtnHelp:"Sprache wechseln",annotationbtnHelp:"Anmerkung hinzufügen",addbookmarkbtnHelp:"Lesezeichen hinzufügen",removebookmarkbtnHelp:"Lesezeichen entfernen",updatebookmarkbtnHelp:"Lesezeichen aktualisieren",btnShoppingCart:"Warenkorb",Help_ShoppingCartbtn:"Warenkorb",Help_btnNextPage:"Nächste Seite",Help_btnPrePage:"Vorige Seite",Help_btnAutoFlip:"Autoflip",Help_StopAutoFlip:"Autoflip stoppen",btnaddbookmark:"einfügen",btndeletebookmark:"löschen",btnupdatebookmark:"aktualisieren",frmyourbookmarks:"Ihr Lesezeichen",frmitems:"Artikel",DownloadFullPublication:"Vollständige Publikation",DownloadCurrentPage:"Aktuelle Seite",DownloadAttachedFiles:"Anhänge",lblLink:"Teilen-Link",btnCopy:"kopieren",infCopyToClipboard:"Ihr Browser unterstützt die Zwischenablage nicht",restorePage:"Wiederherstellen?",tmpl_Backgoundsoundon:"Hintergrundsound anschalten",tmpl_Backgoundsoundoff:"Hintergrundsound abschalten",tmpl_Flipsoundon:"Flipsound anschalten",tmpl_Flipsoundoff:"Flipsound abschalten",Help_PageIndex:"Aktuelle Seitenzahl",tmpl_PrintPageRanges:"Seitenbereich",tmpl_PrintPreview:"Vorschau",btnSelection:"Text auswählen",loginNameLabel:"Name:",btnGotoPage:"Springen zu",btnSettings:"Titeleinstellung",soundSettingTitle:"Soundeinstellung",closeFlipSound:"Flipsound anschalten",closeBackgroundSound:"Hintergrundsound anschalten",frmShareCaption:"teilen",frmShareLinkLabel:"Link:",frmShareBtnCopy:"kopieren",frmShareItemsGroupCaption:"Mit Freunden teilen",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Seite aufrufen",btnPageBack:"Rückwärts",btnPageForward:"Vorwärts",SelectTextCopy:"Kopieren von Text",selectCopyButton:"kopieren",TStuffCart_TypeCart:"Warenkorb",TStuffCart_DetailedQuantity:"Quantität",TStuffCart_DetailedPrice:"Preis",ShappingCart_Close:"Schließen",ShappingCart_CheckOut:"Zahlung",ShappingCart_Item:"Artikel",ShappingCart_Total:"Summe",ShappingCart_AddCart:"In Warenkorb einfügen",ShappingCart_InStock:"Vorrätig",TStuffCart_DetailedCost:"Versandkosten",TStuffCart_DetailedTime:"Lieferzeit",TStuffCart_DetailedDay:"Tag(e)",ShappingCart_NotStock:"Nicht vorrätig",btnCrop:"zuschneiden",btnDragButton:"ziehen",btnFlipBook:"Flipbook",btnSlideMode:"Slidemodus",btnSinglePageMode:"Einzelseite",btnVertical:"Vertikal-Modus",btnHotizontal:"Horizontal-Modus",btnClose:"Ausschalten",btnDoublePage:"Doppelseite",btnBookStatus:"Dokumentansicht",checkBoxInsert:"In aktuelle Seite einbetten",lblLast:"Letzte Seite",lblFirst:"Erste Seite",lblFullscreen:"Vollbildmodus",lblName:"Name",lblPassword:"Passwort",lblLogin:"einloggen",lblCancel:"abbrechen",lblNoName:"Benutzername darf nicht leer sein.",lblNoPassword:"Passwort darf nicht leer sein.",lblNoCorrectLogin:"Bitte geben Sie richtigen Benutzernamen und das Passwort ein.",btnVideo:"Video-Galerie",btnSlideShow:"Diashow",pnlSearchInputInvalid:"Der Suchtext ist zu kurz.",btnDragToMove:"Zoom per Mausrad",btnPositionToMove:"Navigieren mit der Maus",lblHelp1:"Die Ecke der Seite ziehen",lblHelp2:"Zoomen per Doppelklick",lblCopy:"kopieren",lblAddToPage:"Zur Seite hinzufügen",lblPage:"Seite",lblTitle:"Titel",lblEdit:"bearbeiten",lblDelete:"löschen",lblRemoveAll:"Alles entfernen",tltCursor:"Cursor",tltAddHighlight:"Highlight hinzufügen",tltAddTexts:"Text hinzufügen",tltAddShapes:"Form hinzufügen",tltAddNotes:"Notizen hinzufügen",tltAddImageFile:"Bild hinzufügen",tltAddSignature:"Signatur hinzufügen",tltAddLine:"Linie hinzufügen",tltAddArrow:"Pfeil hinzufügen",tltAddRect:"Rechteck hinzufügen",tltAddEllipse:"Ellipse hinzufügen ",lblDoubleClickToZoomIn:"Zoomen per Doppelklick.",frmShareCaption:"teilen",frmShareLabel:"teilen",frmShareInfo:"Teilen Sie die Publikation in sozialen Netzwerken einfach. Klicken Sie auf folgenden Button.",frminsertLabel:"In Seite einbinden",frminsertInfo:"Verwenden Sie den folgenden Code, um die Publikation in Webseite einzubinden.",btnQRCode:"Scannen von QR-Codes",btnRotateLeft:"Nach links drehen",btnRotateRight:"Nach rechts drehen",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Vorschau",frmHowToUse:"Nutzungsanleitung",lblHelpPage1:"Bewegen Sie Ihren Finger, um die Buchseite umzublättern.",lblHelpPage2:"Vergrößern Sie mit der Geste oder doppelklicken Sie auf die Seite.",lblHelpPage3:"Klicken Sie hier, um das Inhaltsverzeichnis und die Lesezeichen anzuzeigen und Ihre Bücher über soziale Netzwerke zu teilen.",lblHelpPage4:"Fügen Sie Lesezeichen hinzu, verwenden Sie die Suchfunktion und drehen Sie das Buch automatisch.",lblHelpPage5:"Öffnen Sie die Miniaturansichten, um alle Buchseiten anzuzeigen.",TTActionQuiz_PlayAgain:"Wollen Sie es nochmal abspielen?",TTActionQuiz_Ration:"Ihr Seitenverhältnis beträgt ",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Text auswählen",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",frmBookMark:"Lesezeichen",btnFullscreen:"Vollbild",btnExitFullscreen:"Bildschirmfüllende Darstellung beenden",btnMore:"mehr",frmPrintall:"Alle Seiten drucken",frmPrintcurrent:"Aktuelle Seite drucken",frmPrintRange:"Druckbereich",frmPrintexample:"Beispiel: 2,3,5-10",frmPrintbtn:"drucken",frmaboutcaption:"Kontakt",frmaboutcontactinformation:"Kontakt-Informationen",frmaboutADDRESS:"Adresse",frmaboutEMAIL:"e-mail",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",frmaboutAUTHOR:"Tutor",frmaboutDESCRIPTION:"Beschreibung",frmSearch:"Suche",frmToc:"Inhaltsverzeichnis",btnTableOfContent:"Inhaltsverzeichnis anzeigen",lblDescription:"Titel",frmLinkLabel:"Link",frmQrcodeCaption:"Scannen Sie den unteren zweidimensionalen Code, um mit dem Handy zu sehen."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.642340","y":"0.514912","width":"0.123840","height":"-0.014697"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:info@clearclean.de"}}]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{}];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}