/* eslint-disable no-unused-vars */
/* eslint no-console: 0 */
/* global fetch */
/* global Scrivito */
import loremIpsum from "lorem-ipsum";

import boxWidgetScreenshotData from "./binary_data/box_widget_screenshot";
import homepage1ScreenshotData from "./binary_data/homepage1_screenshot";
import homepage2ScreenshotData from "./binary_data/homepage2_screenshot";
import imageWidgetScreenshotData from "./binary_data/image_widget_screenshot";
import sectionWidgetScreenshotData from "./binary_data/section_widget_screenshot";
import spaceWidgetScreenshotData from "./binary_data/space_widget_screenshot";
import ipadData from "./binary_data/ipad";
import iphoneData from "./binary_data/iphone";
import iphoneFrontData from "./binary_data/iphone_front";
import logo1Data from "./binary_data/logo_1";
import logo2Data from "./binary_data/logo_2";
import logo3Data from "./binary_data/logo_3";
import logo4Data from "./binary_data/logo_4";
import logo5Data from "./binary_data/logo_5";
import logo6Data from "./binary_data/logo_6";
import logo7Data from "./binary_data/logo_7";
import logo8Data from "./binary_data/logo_8";
import pageAuthorPageData from "./binary_data/author_page";
import pageBlogPageData from "./binary_data/blog_page";
import pageBlogPostPageData from "./binary_data/blog_post_page";
import pageEventPageData from "./binary_data/event_page";
import pageHomepageData from "./binary_data/homepage";
import pageJobPageData from "./binary_data/job_page";
import pageLandingPageData from "./binary_data/landing_page";
import pagePageData from "./binary_data/page";
import pageRedirectData from "./binary_data/redirect";
import pageSearchResultsPageData from "./binary_data/search_results_page";
import scrivitoLogoBWData from "./binary_data/scrivito_logo_bw";
import scrivitoLogoDarkData from "./binary_data/scrivito_logo_dark";
import scrivitoLogoRedData from "./binary_data/scrivito_logo_red";
import scrivitoLogoWhiteData from "./binary_data/scrivito_logo_white";
import unsplashAllesCandleWoodTableData from "./binary_data/unsplash_alles_candle_wood_table";
import unsplashAppleWorkstationCalendarIpadData from "./binary_data/unsplash_apple_workstation_calendar_ipad";
import unsplashAppleWorkstationWindcaveData from "./binary_data/unsplash_apple_workstation_windcave";
import unsplashBikelaneData from "./binary_data/unsplash_bikelane";
import unsplashBlackTablesWhiteChairsData from "./binary_data/unsplash_black_tables_white_chairs";
import unsplashBuildingCornerCloudsData from "./binary_data/unsplash_building_corner_clouds";
import unsplashBusinessPaperRedSocksData from "./binary_data/unsplash_business_paper_red_socks";
import unsplashBusinessPaperWristwatchData from "./binary_data/unsplash_business_paper_wristwatch";
import unsplashBusyStreetDuskData from "./binary_data/unsplash_busy_street_dusk";
import unsplashBwCoffeeKeyboardMouseData from "./binary_data/unsplash_bw_coffee_keyboard_mouse";
import unsplashBwSuitPolkadotsLaptopData from "./binary_data/unsplash_bw_suit_polkadots_laptop";
import unsplashCactusMacPurpleData from "./binary_data/unsplash_cactus_mac_purple";
import unsplashClosingLaptopData from "./binary_data/unsplash_closing_laptop";
import unsplashComputerBeCreativeData from "./binary_data/unsplash_computer_be_creative";
import unsplashDeskLaptopData from "./binary_data/unsplash_desk_laptop_speaker";
import unsplashDeskMugData from "./binary_data/unsplash_desk_mug";
import unsplashDeskRulerData from "./binary_data/unsplash_desk_ruler";
import unsplashDeveloperSunriseData from "./binary_data/unsplash_developer_sunrise";
import unsplashDimLaptopStandData from "./binary_data/unsplash_dim_laptop_stand";
import unsplashDistractingWindowsTableData from "./binary_data/unsplash_distracting_windows_table";
import unsplashDoMoreDeskData from "./binary_data/unsplash_do_more";
import unsplashDualingLaptopsData from "./binary_data/unsplash_dualing_laptops_blur";
import unsplashEmptyCafeWindowsData from "./binary_data/unsplash_empty_cafe_windows";
import unsplashEurekaTowerData from "./binary_data/unsplash_eureka_tower_night";
import unsplashFemaleBehindWindowData from "./binary_data/unsplash_female_behind_window";
import unsplashFemalePortrait1Data from "./binary_data/unsplash_female_portrait_1";
import unsplashFemalePortrait2Data from "./binary_data/unsplash_female_portrait_2";
import unsplashFemalePortrait3Data from "./binary_data/unsplash_female_portrait_3";
import unsplashFemalePortrait3SquareData from "./binary_data/unsplash_female_portrait_3_square";
import unsplashFemalePortrait4Data from "./binary_data/unsplash_female_portrait_4";
import unsplashFemalePortrait4SquareData from "./binary_data/unsplash_female_portrait_4_square";
import unsplashFemalePortrait5Data from "./binary_data/unsplash_female_portrait_5";
import unsplashFemalePortrait5SquareData from "./binary_data/unsplash_female_portrait_5_square";
import unsplashFinanceIpadCoffeeData from "./binary_data/unsplash_finance_ipad_coffee";
import unsplashGlassesOnMacData from "./binary_data/unsplash_glasses_on_mac";
import unsplashGlassesSunsetData from "./binary_data/unsplash_glasses_sunset";
import unsplashGlovedTweedData from "./binary_data/unsplash_gloved_tweed";
import unsplashGoldWatchCufflinksData from "./binary_data/unsplash_gold_watch_cufflinks";
import unsplashGrandCentralStationData from "./binary_data/unsplash_grand_central_station";
import unsplashHandcraftData from "./binary_data/unsplash_handcraft";
import unsplashHighriseData from "./binary_data/unsplash_highrise";
import unsplashHoleyKneesCollageData from "./binary_data/unsplash_holey_knees_collage";
import unsplashHotpinkData from "./binary_data/unsplash_hotpink_nails_iphone_macbook_fob";
import unsplashiPadChartsData from "./binary_data/unsplash_strips_and_charts";
import unsplashLadyInCoffeeShopData from "./binary_data/unsplash_lady_in_coffee_shop";
import unsplashLadyWalkingNightData from "./binary_data/unsplash_lady_walking_night";
import unsplashLaptopKeyboardData from "./binary_data/unsplash_laptop_keyboard";
import unsplashLongWhiteTableData from "./binary_data/unsplash_long_white_tables_black_chairs";
import unsplashLookupHighriseData from "./binary_data/unsplash_lookup_highrises";
import unsplashMacbookDeveloperData from "./binary_data/unsplash_macbook_developer";
import unsplashMainstreetBlackcoatData from "./binary_data/unsplash_mainstreet_blackcoat";
import unsplashMalePortrait1Data from "./binary_data/unsplash_male_portrait_1";
import unsplashMalePortrait1SquareData from "./binary_data/unsplash_male_portrait_1_square";
import unsplashMalePortrait2Data from "./binary_data/unsplash_male_portrait_2";
import unsplashMalePortrait2SquareData from "./binary_data/unsplash_male_portrait_2_square";
import unsplashMalePortrait3Data from "./binary_data/unsplash_male_portrait_3";
import unsplashMalePortrait3SquareData from "./binary_data/unsplash_male_portrait_3_square";
import unsplashMaleWithSunglassesData from "./binary_data/unsplash_male_with_sunglasses";
import unsplashManCheckingWatchData from "./binary_data/unsplash_man_checking_watch";
import unsplashManTieStraightenData from "./binary_data/unsplash_man_tie_straighten";
import unsplashMeetingRoomMetalData from "./binary_data/unsplash_meeting_room_metal_chairs";
import unsplashMeetingRoomthreeData from "./binary_data/unsplash_meeting_room_three_white_plants";
import unsplashModernChairDeskData from "./binary_data/unsplash_modern_chair_at_desk";
import unsplashMouseWoodenDeskData from "./binary_data/unsplash_mouse_wooden_desk";
import unsplashNeonTrueData from "./binary_data/unsplash_neon_true";
import unsplashNightBuildingData from "./binary_data/unsplash_night_building";
import unsplashNotebookPencilData from "./binary_data/unsplash_notebook_pencil";
import unsplashOfficeWindowData from "./binary_data/unsplash_office_window";
import unsplashOfficeWithGlassData from "./binary_data/unsplash_office_with_glass";
import unsplashOutdoorMeetingData from "./binary_data/unsplash_outdoor_meeting";
import unsplashPlantData from "./binary_data/unsplash_plant";
import unsplashScreenWithClockData from "./binary_data/unsplash_screen_with_clock";
import unsplashSilhouetteDancingData from "./binary_data/unsplash_silhouette_dancing";
import unsplashSkylineDuskData from "./binary_data/unsplash_skyline_dusk";
import unsplashSkylineHarborData from "./binary_data/unsplash_skyline_harbor";
import unsplashSkylineNightData from "./binary_data/unsplash_skyline_night";
import unsplashSkyscraperNightData from "./binary_data/unsplash_skyscraper_night";
import unsplashSolePalmtreeHighriseData from "./binary_data/unsplash_sole_palmtree_highrise";
import unsplashSparseDeskData from "./binary_data/unsplash_neutral_sparse_desk";
import unsplashSpeakerShelfData from "./binary_data/unsplash_speaker_monitor_shelf";
import unsplashTidyDeskTouchScreenData from "./binary_data/unsplash_tidy_desk_touch_screen";
import unsplashTwoLaptopsPencilData from "./binary_data/unsplash_two_laptops_pencil";
import unsplashTypistLaptopData from "./binary_data/unsplash_ringed_typist_laptop";
import unsplashUxDesignerData from "./binary_data/unsplash_ux_designer";
import unsplashWatchTypeBookCoffeeData from "./binary_data/unsplash_watch_type_book_coffee";
import unsplashWhiteMeetingRoomData from "./binary_data/unsplash_white_meeting_room";
import unsplashWoodTableData from "./binary_data/unsplash_wood_table_conversation";
import unsplashWritingPapersData from "./binary_data/unsplash_writing_papers";
import unsplashYellowWatchTypingData from "./binary_data/unsplash_yellow_watch_typing";
import videoWaterfall1Data from "./binary_data/video_waterfall_1";
import videoNightSkyData from "./binary_data/video_night_sky";
import videoOfficeData from "./binary_data/video_office";
import whatToAskPdfData from "./binary_data/what_to_ask";

const Author = Scrivito.getClass("Author");
const Blog = Scrivito.getClass("Blog");
const BlogPost = Scrivito.getClass("BlogPost");
const Download = Scrivito.getClass("Download");
const Event = Scrivito.getClass("Event");
const Homepage = Scrivito.getClass("Homepage");
const Image = Scrivito.getClass("Image");
const Job = Scrivito.getClass("Job");
const LandingPage = Scrivito.getClass("LandingPage");
const Page = Scrivito.getClass("Page");
const RedirectToUi = Scrivito.getClass("RedirectToUi");
const SearchResults = Scrivito.getClass("SearchResults");
const Video = Scrivito.getClass("Video");

const AddressWidget = Scrivito.getClass("AddressWidget");
const BlogOverviewWidget = Scrivito.getClass("BlogOverviewWidget");
const BoxWidget = Scrivito.getClass("BoxWidget");
const ButtonWidget = Scrivito.getClass("ButtonWidget");
const CarouselWidget = Scrivito.getClass("CarouselWidget");
const ColumnContainerWidget = Scrivito.getClass("ColumnContainerWidget");
const ColumnWidget = Scrivito.getClass("ColumnWidget");
const ContactFormWidget = Scrivito.getClass("ContactFormWidget");
const DividerWidget = Scrivito.getClass("DividerWidget");
const EventOverviewWidget = Scrivito.getClass("EventOverviewWidget");
const FactWidget = Scrivito.getClass("FactWidget");
const FeaturePanelWidget = Scrivito.getClass("FeaturePanelWidget");
const GalleryWidget = Scrivito.getClass("GalleryWidget");
const GoogleMapsWidget = Scrivito.getClass("GoogleMapsWidget");
const HeadlineWidget = Scrivito.getClass("HeadlineWidget");
const IconContainerWidget = Scrivito.getClass("IconContainerWidget");
const IconWidget = Scrivito.getClass("IconWidget");
const ImageWidget = Scrivito.getClass("ImageWidget");
const JobOverviewWidget = Scrivito.getClass("JobOverviewWidget");
const LinkContainerWidget = Scrivito.getClass("LinkContainerWidget");
const LinkWidget = Scrivito.getClass("LinkWidget");
const PriceWidget = Scrivito.getClass("PriceWidget");
const PricingSpecWidget = Scrivito.getClass("PricingSpecWidget");
const PricingWidget = Scrivito.getClass("PricingWidget");
const SectionWidget = Scrivito.getClass("SectionWidget");
const TableRowWidget = Scrivito.getClass("TableRowWidget");
const TableWidget = Scrivito.getClass("TableWidget");
const TestimonialSliderWidget = Scrivito.getClass("TestimonialSliderWidget");
const TestimonialWidget = Scrivito.getClass("TestimonialWidget");
const TextWidget = Scrivito.getClass("TextWidget");
const ThumbnailGalleryImageWidget = Scrivito.getClass(
  "ThumbnailGalleryImageWidget"
);
const ThumbnailGalleryWidget = Scrivito.getClass("ThumbnailGalleryWidget");
const TickListItemWidget = Scrivito.getClass("TickListItemWidget");
const TickListWidget = Scrivito.getClass("TickListWidget");
const VideoWidget = Scrivito.getClass("VideoWidget");
const VimeoVideoWidget = Scrivito.getClass("VimeoVideoWidget");
const YoutubeVideoWidget = Scrivito.getClass("YoutubeVideoWidget");

const UNSPLASH_TAGS = ["source: unsplash.com"];
const PEXELS_TAGS = ["source: videos.pexels.com"];
const DEFAULT_TAGS = ["Design", "Development", "Marketing", "Business"];

window.loremIpsum = loremIpsum;

function allExistingBinaries() {
  return Scrivito.load(() => {
    const allObjs = [...Scrivito.Obj.all()];
    const allBinaries = allObjs.filter((obj) => obj.isBinary());
    return allBinaries.map((obj) => ({
      id: obj.id(),
      filename: obj.metadata().get("filename"),
    }));
  });
}

let existingBinaries;

function uploadBinary({
  title,
  url,
  filename,
  thingPlaceholder,
  createMethod,
}) {
  const existingBinary = existingBinaries.filter(
    (i) => i.filename === filename
  );
  if (existingBinary.length) {
    console.log(`Skipping ${thingPlaceholder} "${title}" - already uploaded.`);
    return Scrivito.Obj.get(existingBinary[0].id);
  }

  const obj = createMethod();

  fetch(url)
    .then((res) => res.blob())
    .then((blob) => Scrivito.Binary.upload(blob, { filename }))
    .then((binary) => binary.into(obj))
    .then((newBinary) => obj.update({ blob: newBinary }))
    .then(() => {
      console.log(`Upload of "${title}" done`);
    });

  return obj;
}

function uploadImage({ url, filename }, alternativeText, tags = []) {
  const createMethod = () => Image.create({ alternativeText, tags });

  return uploadBinary({
    title: alternativeText,
    url,
    filename,
    createMethod,
    thingPlaceholder: "image",
  });
}

function uploadVideo({ url, filename }, title, tags = []) {
  const createMethod = () => Video.create({ tags });

  return uploadBinary({
    title,
    url,
    filename,
    createMethod,
    thingPlaceholder: "video",
  });
}

function uploadDownload({ url, filename }, title, tags = []) {
  const createMethod = () => Download.create({ title, tags });

  return uploadBinary({
    title,
    url,
    filename,
    createMethod,
    thingPlaceholder: "download",
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function random(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

function randomShuffle(array) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * (array.length + 1)));
}

// Returns a random date in the past ~5 months(9960000000)
function randomPastDate() {
  return new Date(+new Date() - Math.floor(Math.random() * 9960000000));
}

function randomFutureDate() {
  return new Date(+new Date() + Math.floor(Math.random() * 9960000000));
}

function createBoxWidgetWithIconHeadlineAndText(icon, headline) {
  return new BoxWidget({
    body: [
      new IconWidget({
        icon,
        size: "fa-4x",
        alignment: "center",
      }),
      new HeadlineWidget({
        headline,
        style: "h3",
        alignment: "center",
      }),
      new TextWidget({
        alignment: "center",
        text: loremIpsum({
          units: "paragraphs",
          format: "html",
          count: 1,
          paragraphLowerBound: 2,
          paragraphUpperBound: 3,
        }),
      }),
    ],
  });
}

function createFeaturePanelWidget(icon, headline) {
  return new FeaturePanelWidget({
    icon,
    headline,
    description: loremIpsum({ count: 2 }),
  });
}

function createEvenColumnContainerWidget({ alignment, columns }) {
  const options = {
    columns: columns.map(
      (column) =>
        new ColumnWidget({
          colSize: 12 / columns.length,
          content: column,
        })
    ),
  };
  if (alignment) {
    options.alignment = alignment;
  }

  return new ColumnContainerWidget(options);
}

function create3to9ColumnContainerWidget({ alignment, columns }) {
  const options = {
    columns: columns.map(
      (column, index) =>
        new ColumnWidget({
          colSize: index === 0 ? 3 : 9,
          content: column,
        })
    ),
  };
  if (alignment) {
    options.alignment = alignment;
  }

  return new ColumnContainerWidget(options);
}

function createPricingWidget(root) {
  return new PricingWidget({
    currency: "€",
    smallPlanName: "Basic Plan",
    mediumPlanName: "Team Plan",
    largePlanName: "Corporate Plan",
    smallPlanPrice: "29",
    mediumPlanPrice: "59",
    largePlanPrice: "199",
    smallPlanPeriod: "/mo",
    mediumPlanPeriod: "/mo",
    largePlanPeriod: "/mo",
    smallPlanSpecs: [
      new PricingSpecWidget({ variable: "5", unit: "projects" }),
      new PricingSpecWidget({ variable: "20", unit: "images" }),
      new PricingSpecWidget({ variable: "9/5", unit: "support" }),
    ],
    mediumPlanSpecs: [
      new PricingSpecWidget({ variable: "15", unit: "projects" }),
      new PricingSpecWidget({ variable: "50", unit: "images" }),
      new PricingSpecWidget({ variable: "12/7", unit: "support" }),
    ],
    largePlanSpecs: [
      new PricingSpecWidget({ variable: "unlimited", unit: "projects" }),
      new PricingSpecWidget({ variable: "unlimited", unit: "images" }),
      new PricingSpecWidget({ variable: "24/7", unit: "support" }),
    ],
    smallPlanButton: new Scrivito.Link({ title: "Buy now", obj: root }),
    mediumPlanButton: new Scrivito.Link({ title: "Buy now", obj: root }),
    largePlanButton: new Scrivito.Link({ title: "Buy now", obj: root }),
  });
}

function createRandomIconContainerWidget(size = null) {
  return new IconContainerWidget({
    iconList: [
      new IconWidget({
        icon: "fa-twitter",
        size,
        link: new Scrivito.Link({
          title: "Twitter",
          url: "https://twitter.com",
          target: "_blank",
          rel: "noopener",
        }),
      }),
      new IconWidget({
        icon: "fa-facebook",
        size,
        link: new Scrivito.Link({
          title: "Facebook",
          url: "https://www.facebook.com",
          target: "_blank",
          rel: "noopener",
        }),
      }),
      new IconWidget({
        icon: "fa-instagram",
        size,
        link: new Scrivito.Link({
          title: "Instagram",
          url: "https://www.instagram.com",
          target: "_blank",
          rel: "noopener",
        }),
      }),
      new IconWidget({
        icon: "fa-linkedin",
        size,
        link: new Scrivito.Link({
          title: "Linked In",
          url: "https://www.linkedin.com",
          target: "_blank",
          rel: "noopener",
        }),
      }),
    ],
  });
}

function createCheckIcon() {
  return new IconWidget({ icon: "fa-check" });
}

function createThumbnailGalleryImageWidget({ title, image }) {
  return new ThumbnailGalleryImageWidget({
    title,
    image,
    subtitle: loremIpsum({ units: "words", count: 5 }),
    tags: [random(DEFAULT_TAGS)],
  });
}

function carouselProjectDescription({ target }) {
  return [
    new TextWidget({
      text: `
        <p><b>What we did</b></p>
        <p>${loremIpsum({ count: 3 })}</p>
      `,
    }),
    new ButtonWidget({
      target: new Scrivito.Link({
        title: "Open project",
        obj: target,
      }),
      style: "btn-clear",
    }),
  ];
}

function createAddressWidget({ showBorderBottom }) {
  return new AddressWidget({
    showLogo: "yes",
    showBorderBottom: showBorderBottom ? "yes" : "no",
    locationStreetAddress: "25 Lorem Lis Street",
    locationPostalCode: "92864",
    locationRegion: "Orange California",
    locationCountry: "US",
    phone: "+800 123 4567",
    fax: "+800 466 4422",
    email: "mail@example.com",
  });
}

function createRandomBody() {
  return [
    new SectionWidget({
      content: [
        new TextWidget({
          text: loremIpsum({
            units: "paragraphs",
            format: "html",
            count: 2,
            paragraphLowerBound: 1,
            paragraphUpperBound: 10,
          }),
        }),
      ],
    }),
  ];
}

function importContent() {
  allExistingBinaries().then((binaries) => {
    existingBinaries = binaries;

    // Logos
    const logo1 = uploadImage(logo1Data, "Logo 1");
    const logo2 = uploadImage(logo2Data, "Logo 2");
    const logo3 = uploadImage(logo3Data, "Logo 3");
    const logo4 = uploadImage(logo4Data, "Logo 4");
    const logo5 = uploadImage(logo5Data, "Logo 5");
    const logo6 = uploadImage(logo6Data, "Logo 6");
    const logo7 = uploadImage(logo7Data, "Logo 7");
    const logo8 = uploadImage(logo8Data, "Logo 8");
    const scrivitoLogoDark = uploadImage(
      scrivitoLogoDarkData,
      "Scrivito Logo (Dark)"
    );
    uploadImage(scrivitoLogoBWData, "Scrivito Logo (Black & White)");
    const scrivitoLogoRed = uploadImage(
      scrivitoLogoRedData,
      "Scrivito Logo (Red)"
    );
    const scrivitoLogoWhite = uploadImage(
      scrivitoLogoWhiteData,
      "Scrivito Logo (White)"
    );

    // Images
    const boxWidgetScreenshot = uploadImage(
      boxWidgetScreenshotData,
      "Box Widget Screenshot"
    );
    const imageWidgetScreenshot = uploadImage(
      imageWidgetScreenshotData,
      "Image Widget Screenshot"
    );
    const pageAuthorPage = uploadImage(pageAuthorPageData, "Author Page Image");
    const pageBlogPage = uploadImage(pageBlogPageData, "Blog Page Image");
    const pageBlogPostPage = uploadImage(
      pageBlogPostPageData,
      "Blog Post Page Image"
    );
    const pageEventPage = uploadImage(pageEventPageData, "Event Page Image");
    const pageHomepage = uploadImage(pageHomepageData, "Homepage Image");
    const pageJobPage = uploadImage(pageJobPageData, "Job Page Image");
    const pageLandingPage = uploadImage(
      pageLandingPageData,
      "Landing Page Image"
    );
    const pagePage = uploadImage(pagePageData, "Page Image");
    const pageRedirect = uploadImage(pageRedirectData, "Redirect Page Image");
    const pageSearchResultsPage = uploadImage(
      pageSearchResultsPageData,
      "Search Results Page Image"
    );
    const sectionWidgetScreenshot = uploadImage(
      sectionWidgetScreenshotData,
      "Section Widget Screenshot"
    );
    const spaceWidgetScreenshot = uploadImage(
      spaceWidgetScreenshotData,
      "Space Widget Screenshot"
    );
    const unsplashAllesCandleWoodTable = uploadImage(
      unsplashAllesCandleWoodTableData,
      "Alles candle on wood table",
      UNSPLASH_TAGS
    );
    const unsplashAppleWorkstationCalendarIpad = uploadImage(
      unsplashAppleWorkstationCalendarIpadData,
      "Apple workstation with calendar and Ipad",
      UNSPLASH_TAGS
    );
    const unsplashAppleWorkstationWindcave = uploadImage(
      unsplashAppleWorkstationWindcaveData,
      "Apple workstation with Windcave image",
      UNSPLASH_TAGS
    );
    const unsplashBikelane = uploadImage(
      unsplashBikelaneData,
      "Bikelane",
      UNSPLASH_TAGS
    );
    const unsplashBlackTablesWhiteChairs = uploadImage(
      unsplashBlackTablesWhiteChairsData,
      "Black tables with white chairs",
      UNSPLASH_TAGS
    );
    const unsplashBuildingCornerClouds = uploadImage(
      unsplashBuildingCornerCloudsData,
      "Building corner with clouds",
      UNSPLASH_TAGS
    );
    const unsplashBusinessPaperRedSocks = uploadImage(
      unsplashBusinessPaperRedSocksData,
      "Business paper guy in red socks",
      UNSPLASH_TAGS
    );
    const unsplashBusinessPaperWristwatch = uploadImage(
      unsplashBusinessPaperWristwatchData,
      "Ruler on a desk",
      UNSPLASH_TAGS
    );
    const unsplashBusyStreetDusk = uploadImage(
      unsplashBusyStreetDuskData,
      "Busy street dusk",
      UNSPLASH_TAGS
    );
    const unsplashBwCoffeeKeyboardMouse = uploadImage(
      unsplashBwCoffeeKeyboardMouseData,
      "Coffee keyboard mouse (B/W)",
      UNSPLASH_TAGS
    );
    const unsplashBwSuitPolkadotsLaptop = uploadImage(
      unsplashBwSuitPolkadotsLaptopData,
      "Suit Polkadots Laptop (B/W)",
      UNSPLASH_TAGS
    );
    const unsplashCactusMacPurple = uploadImage(
      unsplashCactusMacPurpleData,
      "Cactus Mac Purple",
      UNSPLASH_TAGS
    );
    const unsplashClosingLaptop = uploadImage(
      unsplashClosingLaptopData,
      "Closing laptop",
      UNSPLASH_TAGS
    );
    const unsplashComputerBeCreative = uploadImage(
      unsplashComputerBeCreativeData,
      "Computer be creative",
      UNSPLASH_TAGS
    );
    const unsplashDeskLaptop = uploadImage(
      unsplashDeskLaptopData,
      "Laptop on a desk",
      UNSPLASH_TAGS
    );
    const unsplashDeskMug = uploadImage(
      unsplashDeskMugData,
      "Mug on a desk",
      UNSPLASH_TAGS
    );
    const unsplashDeskRuler = uploadImage(
      unsplashDeskRulerData,
      "Ruler on a desk",
      UNSPLASH_TAGS
    );
    const unsplashDeveloperSunrise = uploadImage(
      unsplashDeveloperSunriseData,
      "Developer sunrise",
      UNSPLASH_TAGS
    );
    const unsplashDimLaptopStand = uploadImage(
      unsplashDimLaptopStandData,
      "Dim laptop stand",
      UNSPLASH_TAGS
    );
    const unsplashDistractingWindowsTable = uploadImage(
      unsplashDistractingWindowsTableData,
      "Distracting window stable",
      UNSPLASH_TAGS
    );
    const unsplashDoMoreDesk = uploadImage(
      unsplashDoMoreDeskData,
      "Do more desk",
      UNSPLASH_TAGS
    );
    const unsplashDualingLaptops = uploadImage(
      unsplashDualingLaptopsData,
      "Blurred laptop on a table",
      UNSPLASH_TAGS
    );
    const unsplashEmptyCafeWindows = uploadImage(
      unsplashEmptyCafeWindowsData,
      "Empty cafe windows",
      UNSPLASH_TAGS
    );
    const unsplashEurekaTower = uploadImage(
      unsplashEurekaTowerData,
      "Eureka tower at night",
      UNSPLASH_TAGS
    );
    const unsplashFemaleBehindWindow = uploadImage(
      unsplashFemaleBehindWindowData,
      "Female behind window",
      UNSPLASH_TAGS
    );
    const unsplashFemalePortrait1 = uploadImage(
      unsplashFemalePortrait1Data,
      "Female Portrait 1",
      UNSPLASH_TAGS
    );
    const unsplashFemalePortrait2 = uploadImage(
      unsplashFemalePortrait2Data,
      "Female Portrait 2",
      UNSPLASH_TAGS
    );
    uploadImage(
      unsplashFemalePortrait3Data,
      "Female Portrait 3",
      UNSPLASH_TAGS
    );
    const unsplashFemalePortrait3Square = uploadImage(
      unsplashFemalePortrait3SquareData,
      "Female Portrait 3 (Square)",
      [...UNSPLASH_TAGS, "square"]
    );
    uploadImage(
      unsplashFemalePortrait4Data,
      "Female Portrait 4",
      UNSPLASH_TAGS
    );
    const unsplashFemalePortrait4Square = uploadImage(
      unsplashFemalePortrait4SquareData,
      "Female Portrait 4 (Square)",
      [...UNSPLASH_TAGS, "square"]
    );
    uploadImage(
      unsplashFemalePortrait5Data,
      "Female Portrait 5",
      UNSPLASH_TAGS
    );
    const unsplashFemalePortrait5Square = uploadImage(
      unsplashFemalePortrait5SquareData,
      "Female Portrait 5 (Square)",
      [...UNSPLASH_TAGS, "square"]
    );
    const unsplashFinanceIpadCoffee = uploadImage(
      unsplashFinanceIpadCoffeeData,
      "Finance Ipad Coffee",
      UNSPLASH_TAGS
    );
    const unsplashGlassesOnMac = uploadImage(
      unsplashGlassesOnMacData,
      "Glasses on Mac",
      UNSPLASH_TAGS
    );
    const unsplashGlassesSunset = uploadImage(
      unsplashGlassesSunsetData,
      "Glasses Sunset",
      UNSPLASH_TAGS
    );
    const unsplashGlovedTweed = uploadImage(
      unsplashGlovedTweedData,
      "Gloved Tweed",
      UNSPLASH_TAGS
    );
    const unsplashGoldWatchCufflinks = uploadImage(
      unsplashGoldWatchCufflinksData,
      "Gold Watch Cufflinks",
      UNSPLASH_TAGS
    );
    const unsplashGrandCentralStation = uploadImage(
      unsplashGrandCentralStationData,
      "Grand Central Station",
      UNSPLASH_TAGS
    );
    const unsplashHandcraft = uploadImage(
      unsplashHandcraftData,
      "Handcraft",
      UNSPLASH_TAGS
    );
    const unsplashHighrise = uploadImage(
      unsplashHighriseData,
      "Highrise",
      UNSPLASH_TAGS
    );
    const unsplashHoleyKneesCollage = uploadImage(
      unsplashHoleyKneesCollageData,
      "Holey Knees Collage",
      UNSPLASH_TAGS
    );
    const unsplashHotpink = uploadImage(
      unsplashHotpinkData,
      "Hotpink",
      UNSPLASH_TAGS
    );
    const unsplashiPadCharts = uploadImage(
      unsplashiPadChartsData,
      "iPad charts",
      UNSPLASH_TAGS
    );
    const unsplashLadyInCoffeeShop = uploadImage(
      unsplashLadyInCoffeeShopData,
      "Lady in coffee shop",
      UNSPLASH_TAGS
    );
    const unsplashLadyWalkingNight = uploadImage(
      unsplashLadyWalkingNightData,
      "Lady walking at night",
      UNSPLASH_TAGS
    );
    const unsplashLaptopKeyboard = uploadImage(
      unsplashLaptopKeyboardData,
      "Laptop keyboard",
      UNSPLASH_TAGS
    );
    const unsplashLongWhiteTable = uploadImage(
      unsplashLongWhiteTableData,
      "Long white table",
      UNSPLASH_TAGS
    );
    const unsplashLookupHighrise = uploadImage(
      unsplashLookupHighriseData,
      "Looking up at highrise",
      UNSPLASH_TAGS
    );
    const unsplashMacbookDeveloper = uploadImage(
      unsplashMacbookDeveloperData,
      "Developer MacBook",
      UNSPLASH_TAGS
    );
    const unsplashMainstreetBlackcoat = uploadImage(
      unsplashMainstreetBlackcoatData,
      "Mainstreet Blackcoat",
      UNSPLASH_TAGS
    );
    const unsplashMalePortrait1 = uploadImage(
      unsplashMalePortrait1Data,
      "Male Portrait 1",
      UNSPLASH_TAGS
    );
    const unsplashMalePortrait1Square = uploadImage(
      unsplashMalePortrait1SquareData,
      "Male Portrait 1 (Square)",
      [...UNSPLASH_TAGS, "square"]
    );
    const unsplashMalePortrait2 = uploadImage(
      unsplashMalePortrait2Data,
      "Male Portrait 2",
      UNSPLASH_TAGS
    );
    const unsplashMalePortrait2Square = uploadImage(
      unsplashMalePortrait2SquareData,
      "Male Portrait 2 (Square)",
      [...UNSPLASH_TAGS, "square"]
    );
    uploadImage(unsplashMalePortrait3Data, "Male Portrait 3", UNSPLASH_TAGS);
    const unsplashMalePortrait3Square = uploadImage(
      unsplashMalePortrait3SquareData,
      "Male Portrait 3 (Square)",
      [...UNSPLASH_TAGS, "square"]
    );
    const unsplashMaleWithSunglasses = uploadImage(
      unsplashMaleWithSunglassesData,
      "Male with glasses",
      UNSPLASH_TAGS
    );
    const unsplashManCheckingWatch = uploadImage(
      unsplashManCheckingWatchData,
      "Man checking watch",
      UNSPLASH_TAGS
    );
    const unsplashManTieStraighten = uploadImage(
      unsplashManTieStraightenData,
      "Man straightening tie",
      UNSPLASH_TAGS
    );
    const unsplashMeetingRoomMetal = uploadImage(
      unsplashMeetingRoomMetalData,
      "Meeting room with metal chairs",
      UNSPLASH_TAGS
    );
    const unsplashMeetingRoomthree = uploadImage(
      unsplashMeetingRoomthreeData,
      "Meeting room with three white plants",
      UNSPLASH_TAGS
    );
    const unsplashModernChairDesk = uploadImage(
      unsplashModernChairDeskData,
      "Modern chair at desk",
      UNSPLASH_TAGS
    );
    const unsplashMouseWoodenDesk = uploadImage(
      unsplashMouseWoodenDeskData,
      "Mouse wooden desk",
      UNSPLASH_TAGS
    );
    const unsplashNeonTrue = uploadImage(
      unsplashNeonTrueData,
      "Neon true",
      UNSPLASH_TAGS
    );
    const unsplashNightBuilding = uploadImage(
      unsplashNightBuildingData,
      "Building at night",
      UNSPLASH_TAGS
    );
    const unsplashNotebookPencil = uploadImage(
      unsplashNotebookPencilData,
      "Notebook with pencil",
      UNSPLASH_TAGS
    );
    const unsplashOfficeWindow = uploadImage(
      unsplashOfficeWindowData,
      "Office Window",
      UNSPLASH_TAGS
    );
    const unsplashOfficeWithGlass = uploadImage(
      unsplashOfficeWithGlassData,
      "Glass office",
      UNSPLASH_TAGS
    );
    const unsplashOutdoorMeeting = uploadImage(
      unsplashOutdoorMeetingData,
      "Outdoor meeting",
      UNSPLASH_TAGS
    );
    const unsplashPlant = uploadImage(
      unsplashPlantData,
      "Plant on desk",
      UNSPLASH_TAGS
    );
    const unsplashScreenWithClock = uploadImage(
      unsplashScreenWithClockData,
      "Screen with clock",
      UNSPLASH_TAGS
    );
    const unsplashSilhouetteDancing = uploadImage(
      unsplashSilhouetteDancingData,
      "Silhouette dancing",
      UNSPLASH_TAGS
    );
    const unsplashSkylineDusk = uploadImage(
      unsplashSkylineDuskData,
      "Skyline dusk",
      UNSPLASH_TAGS
    );
    const unsplashSkylineHarbor = uploadImage(
      unsplashSkylineHarborData,
      "Skyline harbor",
      UNSPLASH_TAGS
    );
    const unsplashSkylineNight = uploadImage(
      unsplashSkylineNightData,
      "Skyline night",
      UNSPLASH_TAGS
    );
    const unsplashSkyscraperNight = uploadImage(
      unsplashSkyscraperNightData,
      "Skyscraper night",
      UNSPLASH_TAGS
    );
    const unsplashSolePalmtreeHighrise = uploadImage(
      unsplashSolePalmtreeHighriseData,
      "Sole palmtree highrise",
      UNSPLASH_TAGS
    );
    const unsplashSparseDesk = uploadImage(
      unsplashSparseDeskData,
      "Sparse desk",
      UNSPLASH_TAGS
    );
    const unsplashSpeakerShelf = uploadImage(
      unsplashSpeakerShelfData,
      "Shelf with speaker",
      UNSPLASH_TAGS
    );
    const unsplashTidyDeskTouchScreen = uploadImage(
      unsplashTidyDeskTouchScreenData,
      "Tidy desk with touch screen",
      UNSPLASH_TAGS
    );
    const unsplashTwoLaptopsPencil = uploadImage(
      unsplashTwoLaptopsPencilData,
      "Two laptops with pencil",
      UNSPLASH_TAGS
    );
    const unsplashTypistLaptop = uploadImage(
      unsplashTypistLaptopData,
      "Typist on laptop",
      UNSPLASH_TAGS
    );
    const unsplashUxDesigner = uploadImage(
      unsplashUxDesignerData,
      "UX Designer desk",
      UNSPLASH_TAGS
    );
    const unsplashWatchTypeBookCoffee = uploadImage(
      unsplashWatchTypeBookCoffeeData,
      "Watch Type Book Coffee",
      UNSPLASH_TAGS
    );
    const unsplashWhiteMeetingRoom = uploadImage(
      unsplashWhiteMeetingRoomData,
      "White meeting room",
      UNSPLASH_TAGS
    );
    const unsplashWoodTable = uploadImage(
      unsplashWoodTableData,
      "Wooden table",
      UNSPLASH_TAGS
    );
    const unsplashWritingPapers = uploadImage(
      unsplashWritingPapersData,
      "Writing papers",
      UNSPLASH_TAGS
    );
    const unsplashYellowWatchTyping = uploadImage(
      unsplashYellowWatchTypingData,
      "Yellow watch typing",
      UNSPLASH_TAGS
    );

    // Videos
    const videoWaterfall1 = uploadVideo(videoWaterfall1Data, "Waterfall 1");
    const nightSky = uploadVideo(videoNightSkyData, "Night sky", PEXELS_TAGS);
    uploadVideo(videoOfficeData, "Office", PEXELS_TAGS);

    // PDFs
    const whatToAskPdf = uploadDownload(
      whatToAskPdfData,
      "Are You Asking Your CMS Vendor the Right Questions?",
      ["White Paper"]
    );

    const homepage1Screenshot = uploadImage(
      homepage1ScreenshotData,
      "Homepage variant 1 screenshot"
    );
    const homepage2Screenshot = uploadImage(
      homepage2ScreenshotData,
      "Homepage variant 2 screenshot"
    );
    const ipad = uploadImage(ipadData, "iPad screenshot");
    const iphone = uploadImage(iphoneData, "iPhone screenshot");
    const iphoneFront = uploadImage(iphoneFrontData, "iPhone front screenshot");

    // Obj.root()
    const root = Homepage.create({
      _path: "/",
      // Content is at the bottom of the file
    });

    // Path less Objs
    const jobs = Page.create({
      _path: "/about/jobs",
      _permalink: "jobs",
      title: "Jobs",
      body: [
        new SectionWidget({
          backgroundImage: unsplashWoodTable,
          content: [
            new HeadlineWidget({
              alignment: "center",
              style: "h1",
              headline: "Join our awarded team",
            }),
            new HeadlineWidget({
              alignment: "center",
              level: "h2",
              style: "h4",
              headline: loremIpsum({ count: 3 }),
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new HeadlineWidget({
              alignment: "center",
              headline: "We are hiring the following positions",
              level: "h1",
              style: "h2",
              showDividingLine: "yes",
            }),
            new JobOverviewWidget({}),
          ],
        }),
        new SectionWidget({
          content: [
            new HeadlineWidget({
              alignment: "center",
              headline: "Why it's great to work with us",
              level: "h1",
              style: "h2",
              showDividingLine: "yes",
            }),
            new HeadlineWidget({
              alignment: "center",
              headline: loremIpsum({ count: 2 }),
              level: "h2",
              style: "h4",
            }),
          ],
        }),
        new SectionWidget({
          useFullWidth: "yes",
          content: [
            new CarouselWidget({
              images: [
                unsplashWhiteMeetingRoom,
                unsplashDoMoreDesk,
                unsplashTwoLaptopsPencil,
              ],
            }),
          ],
        }),
        new SectionWidget({
          content: [
            createEvenColumnContainerWidget({
              columns: [
                [
                  createBoxWidgetWithIconHeadlineAndText(
                    "fa-star",
                    "Great environment"
                  ),
                ],
                [
                  createBoxWidgetWithIconHeadlineAndText(
                    "fa-users",
                    "Awarded team"
                  ),
                ],
                [
                  createBoxWidgetWithIconHeadlineAndText(
                    "fa-money",
                    "Fair payment"
                  ),
                ],
              ],
            }),
            createEvenColumnContainerWidget({
              columns: [
                [
                  createBoxWidgetWithIconHeadlineAndText(
                    "fa-child",
                    "Daily free meal"
                  ),
                ],
                [
                  createBoxWidgetWithIconHeadlineAndText(
                    "fa-laptop",
                    "The best equipment"
                  ),
                ],
                [
                  createBoxWidgetWithIconHeadlineAndText(
                    "fa-heartbeat",
                    "Sport activity"
                  ),
                ],
              ],
            }),
          ],
        }),
      ],
    });
    const contact = Page.create({
      _path: "/about/contact",
      _permalink: "contact",
      title: "Contact",
      body: [
        new SectionWidget({
          showPadding: "no",
          useFullWidth: "yes",
          content: [
            new GoogleMapsWidget({
              address: "TV tower, Berlin, Germany",
              zoom: "15",
              showWidgets: "yes",
              content: [
                createAddressWidget({ showBorderBottom: true }),
                createRandomIconContainerWidget(),
              ],
            }),
          ],
        }),
        new SectionWidget({
          content: [
            new BoxWidget({
              useOffset: "yes",
              body: [
                new HeadlineWidget({
                  alignment: "center",
                  headline: "Get in touch with us",
                  level: "h1",
                  style: "h2",
                  showDividingLine: "yes",
                }),
                new HeadlineWidget({
                  alignment: "center",
                  level: "h2",
                  style: "h4",
                  headline: loremIpsum({ count: 3 }),
                }),
                new ContactFormWidget({
                  agreementText: loremIpsum({ count: 3 }),
                  buttonText: "Send message now",
                }),
              ],
            }),
          ],
        }),
      ],
    });
    // const imprint = Page.create({
    //   title: "Imprint",
    //   _permalink: "imprint",
    //   body: [
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           level: "h1",
    //           style: "h2",
    //           headline: "Lorem ipsum dolor sit amet",
    //         }),
    //         new HeadlineWidget({
    //           level: "h2",
    //           style: "h4",
    //           headline: "Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    //         }),
    //         new TextWidget({
    //           text: loremIpsum({
    //             units: "paragraphs",
    //             format: "html",
    //             count: 9,
    //             paragraphLowerBound: 1,
    //             paragraphUpperBound: 10,
    //           }),
    //         }),
    //       ],
    //     }),
    //   ],
    // });
    // const events = Page.create({
    //   _path: "/about/events",
    //   _permalink: "events",
    //   title: "Events & Conferences",
    //   body: [
    //     new SectionWidget({
    //       backgroundImage: unsplashTidyDeskTouchScreen,
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Upcoming new events",
    //           style: "h1",
    //           alignment: "center",
    //         }),
    //         new HeadlineWidget({
    //           headline: loremIpsum({ count: 2 }),
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new EventOverviewWidget({
    //           showTags: "yes",
    //         }),
    //       ],
    //     }),
    //   ],
    // });
    // const landingPage = LandingPage.create({
    //   _path: "/pages_and_widgets/landing_page",
    //   _permalink: "landing-page",
    //   title: "Landing Page",
    //   navigationHeight: "full-height",
    //   navigationBackgroundImageGradient: "yes",
    //   navigationBackgroundImage: unsplashMouseWoodenDesk,
    //   navigationSection: [
    //     new ColumnContainerWidget({
    //       alignment: "stretch",
    //       columns: [
    //         // col 1
    //         new ColumnWidget({
    //           colSize: 8,
    //           content: [
    //             new HeadlineWidget({
    //               headline: capitalizeFirstLetter(
    //                 loremIpsum({ units: "words", count: 4 })
    //               ),
    //               style: "h1",
    //             }),
    //             new TextWidget({
    //               text: loremIpsum({
    //                 units: "paragraphs",
    //                 format: "html",
    //                 count: 1,
    //                 paragraphLowerBound: 3,
    //                 paragraphUpperBound: 5,
    //               }),
    //             }),
    //             new ButtonWidget({
    //               target: new Scrivito.Link({
    //                 title: "Call to action",
    //                 obj: root,
    //               }),
    //             }),
    //           ],
    //         }),
    //         // col 2
    //         new ColumnWidget({
    //           colSize: 4,
    //           content: [
    //             new ContactFormWidget({
    //               backgroundColor: "transparent",
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //   ],
    //   body: [
    //     new SectionWidget({
    //       backgroundColor: "greydark",
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Explore the magic features",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: loremIpsum({ count: 2 }),
    //           level: "h2",
    //           style: "h4",
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // left column
    //             [
    //               new HeadlineWidget({
    //                 headline: "Amazing features",
    //                 alignment: "right",
    //                 style: "h3",
    //               }),
    //               new TextWidget({
    //                 alignment: "right",
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 2,
    //                   paragraphUpperBound: 2,
    //                 }),
    //               }),
    //               new HeadlineWidget({
    //                 headline: "Easy to use",
    //                 alignment: "right",
    //                 style: "h3",
    //               }),
    //               new TextWidget({
    //                 alignment: "right",
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 2,
    //                   paragraphUpperBound: 2,
    //                 }),
    //               }),
    //             ],
    //             // center column,
    //             [
    //               new ImageWidget({
    //                 image: iphoneFront,
    //                 alignment: "center",
    //                 animation: "zoomIn",
    //               }),
    //             ],
    //             // right column,
    //             [
    //               new HeadlineWidget({
    //                 headline: "Cool and fresh design",
    //                 style: "h3",
    //               }),
    //               new TextWidget({
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 2,
    //                   paragraphUpperBound: 2,
    //                 }),
    //               }),
    //               new HeadlineWidget({
    //                 headline: "Full responsive",
    //                 style: "h3",
    //               }),
    //               new TextWidget({
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 2,
    //                   paragraphUpperBound: 2,
    //                 }),
    //               }),
    //             ],
    //           ],
    //         }),
    //         new DividerWidget({}),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundColor: "greydark",
    //       showPadding: "no",
    //       content: [
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             // col 1
    //             [
    //               new FactWidget({
    //                 value: "134",
    //                 key: loremIpsum({ units: "words", count: 3 }),
    //               }),
    //             ],
    //             // col 2
    //             [
    //               new FactWidget({
    //                 value: "43",
    //                 key: loremIpsum({ units: "words", count: 3 }),
    //               }),
    //             ],
    //             // col 3
    //             [
    //               new FactWidget({
    //                 value: "13",
    //                 key: loremIpsum({ units: "words", count: 3 }),
    //               }),
    //             ],
    //             // col 4
    //             [
    //               new FactWidget({
    //                 value: "65",
    //                 key: loremIpsum({ units: "words", count: 3 }),
    //               }),
    //             ],
    //           ],
    //         }),
    //         new DividerWidget({}),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundColor: "greydark",
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "More cool highlights",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: loremIpsum({ count: 2 }),
    //           level: "h2",
    //           style: "h4",
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // col 1
    //             [new ImageWidget({ image: ipad, animation: "zoomIn" })],
    //             // col 2
    //             [
    //               new HeadlineWidget({
    //                 level: "h3",
    //                 style: "h2",
    //                 headline: "Content Management for React Apps",
    //               }),
    //               new TextWidget({
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 5,
    //                   paragraphUpperBound: 5,
    //                 }),
    //               }),
    //               new ButtonWidget({
    //                 target: new Scrivito.Link({
    //                   title: "Call to action",
    //                   obj: root,
    //                 }),
    //               }),
    //             ],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // col 1
    //             [
    //               new HeadlineWidget({
    //                 level: "h3",
    //                 style: "h2",
    //                 headline: "Fully Fledged CMS Service",
    //               }),
    //               new TextWidget({
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 5,
    //                   paragraphUpperBound: 5,
    //                 }),
    //               }),
    //               new ButtonWidget({
    //                 target: new Scrivito.Link({
    //                   title: "Call to action",
    //                   obj: root,
    //                 }),
    //               }),
    //             ],
    //             // col 2
    //             [new ImageWidget({ image: iphone, animation: "zoomIn" })],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-picture-o",
    //                 "Drag & drop widgets"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-mouse-pointer",
    //                 "WYSIWYG editing"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-cogs",
    //                 "Easy customization"
    //               ),
    //             ],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-comments-o",
    //                 "Full support"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-clone",
    //                 "Tons of widgets"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-mobile",
    //                 "Fully responsive"
    //               ),
    //             ],
    //           ],
    //         }),
    //         new DividerWidget({}),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundColor: "greydark",
    //       showPadding: "no",
    //       content: [
    //         new VimeoVideoWidget({
    //           vimeoVideoId: "15069551",
    //         }),
    //         new DividerWidget({}),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundColor: "greydark",
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "Choose your plan",
    //         }),
    //         new HeadlineWidget({
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //           headline: loremIpsum({ count: 2 }),
    //         }),
    //         createPricingWidget(root),
    //       ],
    //     }),
    //   ],
    // });

    // // ABOUT
    // const ourWork = Page.create({
    //   _path: "/about/our_work",
    //   title: "Our Work",
    //   body: [
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "Our awarded work",
    //         }),
    //         new HeadlineWidget({
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //           headline: loremIpsum({ count: 2 }),
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       useFullWidth: "yes",
    //       showPadding: "no",
    //       content: [
    //         new ThumbnailGalleryWidget({
    //           showTags: "yes",
    //           images: [
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 01",
    //               image: unsplashGlovedTweed,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 02",
    //               image: unsplashDeskMug,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 03",
    //               image: unsplashYellowWatchTyping,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 04",
    //               image: unsplashMouseWoodenDesk,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 05",
    //               image: unsplashWatchTypeBookCoffee,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 06",
    //               image: unsplashGoldWatchCufflinks,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 07",
    //               image: unsplashWritingPapers,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 08",
    //               image: unsplashGlassesOnMac,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 09",
    //               image: unsplashBusyStreetDusk,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 10",
    //               image: unsplashBwCoffeeKeyboardMouse,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 11",
    //               image: unsplashBwSuitPolkadotsLaptop,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 12",
    //               image: unsplashCactusMacPurple,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 13",
    //               image: unsplashComputerBeCreative,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 14",
    //               image: unsplashDeveloperSunrise,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 15",
    //               image: unsplashDistractingWindowsTable,
    //             }),
    //             createThumbnailGalleryImageWidget({
    //               title: "Project 16",
    //               image: unsplashEmptyCafeWindows,
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //   ],
    // });

    // const ourClients = Page.create({
    //   _path: "/about/our_clients",
    //   _permalink: "clients",
    //   title: "Our Clients",
    // });
    // ourClients.update({
    //   body: [
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Clients and references",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         new HeadlineWidget({
    //           headline: loremIpsum({
    //             count: 3,
    //             sentenceLowerBound: 12,
    //           }),
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       useFullWidth: "yes",
    //       content: [
    //         new CarouselWidget({
    //           images: [
    //             unsplashDualingLaptops,
    //             unsplashClosingLaptop,
    //             unsplashDeskLaptop,
    //           ],
    //           showDescription: "yes",
    //           descriptionLogo: logo1,
    //           description: carouselProjectDescription({ target: ourClients }),
    //         }),
    //         new CarouselWidget({
    //           images: [
    //             unsplashEurekaTower,
    //             unsplashNightBuilding,
    //             unsplashSkyscraperNight,
    //           ],
    //           showDescription: "yes",
    //           descriptionLogo: logo2,
    //           description: carouselProjectDescription({ target: ourClients }),
    //         }),
    //         new CarouselWidget({
    //           images: [
    //             unsplashLongWhiteTable,
    //             unsplashSpeakerShelf,
    //             unsplashSparseDesk,
    //           ],
    //           showDescription: "yes",
    //           descriptionLogo: logo3,
    //           description: carouselProjectDescription({ target: ourClients }),
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "And many many more...",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             [new ImageWidget({ image: logo1, alignment: "center" })],
    //             [new ImageWidget({ image: logo2, alignment: "center" })],
    //             [new ImageWidget({ image: logo3, alignment: "center" })],
    //             [new ImageWidget({ image: logo4, alignment: "center" })],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             [new ImageWidget({ image: logo5, alignment: "center" })],
    //             [new ImageWidget({ image: logo6, alignment: "center" })],
    //             [new ImageWidget({ image: logo7, alignment: "center" })],
    //             [new ImageWidget({ image: logo8, alignment: "center" })],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             [new ImageWidget({ image: logo8, alignment: "center" })],
    //             [new ImageWidget({ image: logo4, alignment: "center" })],
    //             [new ImageWidget({ image: logo5, alignment: "center" })],
    //             [new ImageWidget({ image: logo2, alignment: "center" })],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             [new ImageWidget({ image: logo1, alignment: "center" })],
    //             [new ImageWidget({ image: logo8, alignment: "center" })],
    //             [new ImageWidget({ image: logo2, alignment: "center" })],
    //             [new ImageWidget({ image: logo3, alignment: "center" })],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "What our clients say",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundImage: unsplashWhiteMeetingRoom,
    //       content: [
    //         new TestimonialSliderWidget({
    //           testimonials: [
    //             new TestimonialWidget({
    //               testimonial: loremIpsum({ units: "sentences", count: 2 }),
    //               author: "Anna Boris, CEO @ United Company",
    //               authorImage: unsplashFemalePortrait4Square,
    //             }),
    //             new TestimonialWidget({
    //               testimonial: loremIpsum({ units: "sentences", count: 2 }),
    //               author: "Derik Hoff, CTO @ Ultimate Business",
    //               authorImage: unsplashMalePortrait2Square,
    //             }),
    //             new TestimonialWidget({
    //               testimonial: loremIpsum({ units: "sentences", count: 2 }),
    //               author: "Jane Doe, CEO @ Finances Inc.",
    //               authorImage: unsplashFemalePortrait3Square,
    //             }),
    //             new TestimonialWidget({
    //               testimonial: loremIpsum({ units: "sentences", count: 2 }),
    //               author: "Christopher Stan, CEO @ InnoTech",
    //               authorImage: unsplashMalePortrait3Square,
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //   ],
    // });

    // const about = Page.create({
    //   _path: "/about",
    //   _permalink: "about",
    //   title: "About",
    //   childOrder: [ourWork, ourClients, jobs, contact, events],
    //   navigationHeight: "medium-height",
    //   navigationBackgroundImage: unsplashDimLaptopStand,
    //   body: [
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Who we are",
    //           level: "h1",
    //           style: "h2",
    //         }),
    //         new HeadlineWidget({
    //           level: "h2",
    //           style: "h4",
    //           headline: loremIpsum({ count: 3 }),
    //         }),
    //         new TextWidget({
    //           text: loremIpsum({
    //             units: "paragraphs",
    //             format: "html",
    //             count: 4,
    //             paragraphLowerBound: 4,
    //             paragraphUpperBound: 10,
    //           }),
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundImage: unsplashNeonTrue,
    //       content: [
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             // col 1
    //             [
    //               new FactWidget({
    //                 value: "134",
    //                 key: loremIpsum({ units: "words", count: 3 }),
    //               }),
    //             ],
    //             // col 2
    //             [
    //               new FactWidget({
    //                 value: "43",
    //                 key: loremIpsum({ units: "words", count: 3 }),
    //               }),
    //             ],
    //             // col 3
    //             [
    //               new FactWidget({
    //                 value: "13",
    //                 key: loremIpsum({ units: "words", count: 3 }),
    //               }),
    //             ],
    //             // col 4
    //             [
    //               new FactWidget({
    //                 value: "65",
    //                 key: loremIpsum({ units: "words", count: 3 }),
    //               }),
    //             ],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "Meet our awarded team",
    //         }),
    //         new HeadlineWidget({
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //           headline: loremIpsum({ count: 2 }),
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             // col 1
    //             [
    //               new BoxWidget({
    //                 body: [
    //                   new ImageWidget({
    //                     image: unsplashFemalePortrait3Square,
    //                     alternativeText: "Jane Morgan",
    //                     animation: "fadeInUp",
    //                   }),
    //                   new HeadlineWidget({
    //                     headline: "Jane Morgan",
    //                     style: "h3",
    //                     alignment: "center",
    //                   }),
    //                   new HeadlineWidget({
    //                     alignment: "center",
    //                     headline: "Product Research Director",
    //                     style: "h5",
    //                     showDividingLine: "yes",
    //                     showMargin: "no",
    //                   }),
    //                   createRandomIconContainerWidget(),
    //                 ],
    //               }),
    //             ],
    //             // col 2
    //             [
    //               new BoxWidget({
    //                 body: [
    //                   new ImageWidget({
    //                     image: unsplashMalePortrait3Square,
    //                     alternativeText: "Peter Doe",
    //                     animation: "fadeInUp",
    //                   }),
    //                   new HeadlineWidget({
    //                     headline: "Peter Doe",
    //                     style: "h3",
    //                     alignment: "center",
    //                   }),
    //                   new HeadlineWidget({
    //                     alignment: "center",
    //                     headline: "Internal Applications Supervisor",
    //                     style: "h5",
    //                     showDividingLine: "yes",
    //                     showMargin: "no",
    //                   }),
    //                   createRandomIconContainerWidget(),
    //                 ],
    //               }),
    //             ],
    //             // col 3
    //             [
    //               new BoxWidget({
    //                 body: [
    //                   new ImageWidget({
    //                     image: unsplashFemalePortrait4Square,
    //                     alternativeText: "Susan Summer",
    //                     animation: "fadeInUp",
    //                   }),
    //                   new HeadlineWidget({
    //                     headline: "Susan Summer",
    //                     style: "h3",
    //                     alignment: "center",
    //                   }),
    //                   new HeadlineWidget({
    //                     alignment: "center",
    //                     headline: "Regional Agent",
    //                     style: "h5",
    //                     showDividingLine: "yes",
    //                     showMargin: "no",
    //                   }),
    //                   createRandomIconContainerWidget(),
    //                 ],
    //               }),
    //             ],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             // col 1
    //             [
    //               new BoxWidget({
    //                 body: [
    //                   new ImageWidget({
    //                     image: unsplashMalePortrait2Square,
    //                     alternativeText: "Clarius Ceasar",
    //                     animation: "fadeInUp",
    //                   }),
    //                   new HeadlineWidget({
    //                     headline: "Clarius Ceasar",
    //                     style: "h3",
    //                     alignment: "center",
    //                   }),
    //                   new HeadlineWidget({
    //                     alignment: "center",
    //                     headline: "Dynamic Operations Representative",
    //                     style: "h5",
    //                     showDividingLine: "yes",
    //                     showMargin: "no",
    //                   }),
    //                   createRandomIconContainerWidget(),
    //                 ],
    //               }),
    //             ],
    //             // col 2
    //             [
    //               new BoxWidget({
    //                 body: [
    //                   new ImageWidget({
    //                     image: unsplashFemalePortrait5Square,
    //                     alternativeText: "Anna Corn",
    //                     animation: "fadeInUp",
    //                   }),
    //                   new HeadlineWidget({
    //                     headline: "Anna Corn",
    //                     style: "h3",
    //                     alignment: "center",
    //                   }),
    //                   new HeadlineWidget({
    //                     alignment: "center",
    //                     headline: "Regional Brand Producer",
    //                     style: "h5",
    //                     showDividingLine: "yes",
    //                     showMargin: "no",
    //                   }),
    //                   createRandomIconContainerWidget(),
    //                 ],
    //               }),
    //             ],
    //             // col 3
    //             [
    //               new BoxWidget({
    //                 body: [
    //                   new ImageWidget({
    //                     image: unsplashMalePortrait1Square,
    //                     alternativeText: "Jason John",
    //                     animation: "fadeInUp",
    //                   }),
    //                   new HeadlineWidget({
    //                     headline: "Jason John",
    //                     style: "h3",
    //                     alignment: "center",
    //                   }),
    //                   new HeadlineWidget({
    //                     alignment: "center",
    //                     headline: "Dynamic Paradigm Director",
    //                     style: "h5",
    //                     showDividingLine: "yes",
    //                     showMargin: "no",
    //                   }),
    //                   createRandomIconContainerWidget(),
    //                 ],
    //               }),
    //             ],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundImage: unsplashSilhouetteDancing,
    //       content: [
    //         new HeadlineWidget({
    //           headline: "We are hiring",
    //           style: "h1",
    //           alignment: "center",
    //         }),
    //         new TextWidget({
    //           alignment: "center",
    //           text: loremIpsum({
    //             units: "paragraphs",
    //             format: "html",
    //             count: 1,
    //             paragraphLowerBound: 4,
    //             paragraphUpperBound: 5,
    //           }),
    //         }),
    //         new ButtonWidget({
    //           alignment: "center",
    //           target: new Scrivito.Link({
    //             title: "See full job list",
    //             obj: jobs,
    //           }),
    //         }),
    //       ],
    //     }),
    //   ],
    // });

    // // PRODUCT
    // const product = Page.create({
    //   _path: "/product",
    //   title: "Product",
    //   body: [
    //     new SectionWidget({
    //       backgroundImage: unsplashTidyDeskTouchScreen,
    //       content: [
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // col 1
    //             [
    //               new HeadlineWidget({
    //                 style: "h1",
    //                 headline: "Amazing video hero widget",
    //               }),
    //               new TextWidget({
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 3,
    //                   paragraphUpperBound: 5,
    //                 }),
    //               }),
    //               new ButtonWidget({
    //                 target: new Scrivito.Link({
    //                   title: "Call to action",
    //                   obj: about,
    //                 }),
    //               }),
    //             ],
    //             // col 2
    //             [new ImageWidget({ image: iphone, animation: "zoomIn" })],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "Great feature overview",
    //         }),
    //         new HeadlineWidget({
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //           headline: loremIpsum({ count: 2 }),
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-picture-o",
    //                 "Drag & drop widgets"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-mouse-pointer",
    //                 "WYSIWYG editing"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-cogs",
    //                 "Easy customization"
    //               ),
    //             ],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-comments-o",
    //                 "Full support"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-clone",
    //                 "Tons of widgets"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-mobile",
    //                 "Fully responsive"
    //               ),
    //             ],
    //           ],
    //         }),
    //         new ButtonWidget({
    //           alignment: "center",
    //           target: new Scrivito.Link({
    //             title: "Call to action",
    //             obj: root,
    //           }),
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       useFullWidth: "yes",
    //       showPadding: "no",
    //       content: [
    //         new GalleryWidget({
    //           images: [
    //             unsplashSkylineHarbor,
    //             unsplashHighrise,
    //             unsplashGrandCentralStation,
    //             unsplashSkylineNight,
    //             unsplashSolePalmtreeHighrise,
    //             unsplashSkylineDusk,
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "Choose your plan",
    //         }),
    //         new HeadlineWidget({
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //           headline: loremIpsum({ count: 2 }),
    //         }),
    //         createPricingWidget(root),
    //       ],
    //     }),
    //   ],
    // });

    // // PRICING
    // const pricing = Page.create({
    //   _path: "/pricing",
    //   _permalink: "pricing",
    //   title: "Pricing",
    //   body: [
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "A great solution with great features",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         new HeadlineWidget({
    //           headline: loremIpsum({ count: 2 }),
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // col 1
    //             [new ImageWidget({ image: ipad, animation: "zoomIn" })],
    //             // col 2
    //             [
    //               new HeadlineWidget({
    //                 level: "h3",
    //                 style: "h2",
    //                 headline: "Content Management for React Apps",
    //               }),
    //               new TextWidget({
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 5,
    //                   paragraphUpperBound: 5,
    //                 }),
    //               }),
    //               new ButtonWidget({
    //                 target: new Scrivito.Link({
    //                   title: "Call to action",
    //                   obj: root,
    //                 }),
    //               }),
    //             ],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // col 1
    //             [
    //               new HeadlineWidget({
    //                 level: "h3",
    //                 style: "h2",
    //                 headline: "Fully Fledged CMS Service",
    //               }),
    //               new TextWidget({
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 5,
    //                   paragraphUpperBound: 5,
    //                 }),
    //               }),
    //               new ButtonWidget({
    //                 target: new Scrivito.Link({
    //                   title: "Call to action",
    //                   obj: root,
    //                 }),
    //               }),
    //             ],
    //             // col 2
    //             [new ImageWidget({ image: iphone, animation: "zoomIn" })],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [createFeaturePanelWidget("fa-check", "Drag & drop widgets")],
    //             [createFeaturePanelWidget("fa-cogs", "Easy customization")],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [
    //               createFeaturePanelWidget(
    //                 "fa-file-text-o",
    //                 "Full documentation"
    //               ),
    //             ],
    //             [createFeaturePanelWidget("fa-comments-o", "Full support")],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [createFeaturePanelWidget("fa-clone", "Tons of widgets")],
    //             [createFeaturePanelWidget("fa-mobile", "Fully responsive")],
    //           ],
    //         }),
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Choose your plan",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundImage: unsplashHotpink,
    //       content: [createPricingWidget(root)],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Compare all features",
    //           level: "h3",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: loremIpsum({ count: "2" }),
    //           level: "h2",
    //           style: "h4",
    //         }),
    //         new TableWidget({
    //           rows: [
    //             new TableRowWidget({
    //               cell1: "Key feature 1",
    //               cell2: [
    //                 new TextWidget({
    //                   alignment: "center",
    //                   text: "<p><b>5</b></p>",
    //                 }),
    //               ],
    //               cell3: [
    //                 new TextWidget({
    //                   alignment: "center",
    //                   text: "<p><b>10</b></p>",
    //                 }),
    //               ],
    //               cell4: [
    //                 new TextWidget({
    //                   alignment: "center",
    //                   text: "<p><b>unlimited</b></p>",
    //                 }),
    //               ],
    //             }),
    //             new TableRowWidget({
    //               cell1: "Key feature 2",
    //               cell2: [
    //                 new TextWidget({
    //                   alignment: "center",
    //                   text: "<p><b>20</b></p>",
    //                 }),
    //               ],
    //               cell3: [
    //                 new TextWidget({
    //                   alignment: "center",
    //                   text: "<p><b>40</b></p>",
    //                 }),
    //               ],
    //               cell4: [
    //                 new TextWidget({
    //                   alignment: "center",
    //                   text: "<p><b>unlimited</b></p>",
    //                 }),
    //               ],
    //             }),
    //             new TableRowWidget({
    //               cell1: "Key feature 3",
    //               cell2: [
    //                 new TextWidget({
    //                   alignment: "center",
    //                   text: "<p><b>9/5</b></p>",
    //                 }),
    //               ],
    //               cell3: [
    //                 new TextWidget({
    //                   alignment: "center",
    //                   text: "<p><b>12/7</b></p>",
    //                 }),
    //               ],
    //               cell4: [
    //                 new TextWidget({
    //                   alignment: "center",
    //                   text: "<p><b>24/7</b></p>",
    //                 }),
    //               ],
    //             }),
    //             new TableRowWidget({
    //               cell1: "Key feature 4",
    //               cell2: [createCheckIcon()],
    //               cell3: [createCheckIcon()],
    //               cell4: [createCheckIcon()],
    //             }),
    //             new TableRowWidget({
    //               cell1: "Key feature 5",
    //               cell2: [createCheckIcon()],
    //               cell3: [createCheckIcon()],
    //               cell4: [createCheckIcon()],
    //             }),
    //             new TableRowWidget({
    //               cell1: "Key feature 6",
    //               cell2: [createCheckIcon()],
    //               cell3: [createCheckIcon()],
    //               cell4: [createCheckIcon()],
    //             }),
    //             new TableRowWidget({
    //               cell1: "Key feature 7",
    //               cell2: [createCheckIcon()],
    //               cell3: [createCheckIcon()],
    //               cell4: [createCheckIcon()],
    //             }),
    //             new TableRowWidget({
    //               cell1: "Key feature 8",
    //               cell2: [new TextWidget({ text: "<p><b>-</b></p>" })],
    //               cell3: [createCheckIcon()],
    //               cell4: [createCheckIcon()],
    //             }),
    //             new TableRowWidget({
    //               cell1: "Key feature 9",
    //               cell2: [new TextWidget({ text: "<p><b>-</b></p>" })],
    //               cell3: [new TextWidget({ text: "<p><b>-</b></p>" })],
    //               cell4: [createCheckIcon()],
    //             }),
    //           ],
    //           summaryRows: [
    //             new TableRowWidget({
    //               cell1: "Prices",
    //               cell2: [
    //                 new PriceWidget({
    //                   price: "29",
    //                   currency: "€",
    //                   period: "/mo",
    //                 }),
    //               ],
    //               cell3: [
    //                 new PriceWidget({
    //                   price: "59",
    //                   currency: "€",
    //                   period: "/mo",
    //                 }),
    //               ],
    //               cell4: [
    //                 new PriceWidget({
    //                   price: "199",
    //                   currency: "€",
    //                   period: "/mo",
    //                 }),
    //               ],
    //             }),
    //           ],
    //           header1: "Features",
    //           header2: "Basic",
    //           header3: "Team",
    //           header4: "Corporate",
    //         }),
    //       ],
    //     }),
    //   ],
    // });

    // Job.create({
    //   image: unsplashLaptopKeyboard,
    //   title: "SEO specialist",
    //   body: createRandomBody(),
    //   datePosted: randomPastDate(),
    //   validThrough: randomFutureDate(),
    //   hiringOrganizationName: "Developers Place Inc.",
    //   locationStreetAddress: "John Doe Street 1337",
    //   locationLocality: "Berlin",
    //   locationPostalCode: "10369",
    //   locationCountry: "Germany",
    //   employmentType: ["FULL_TIME", "PART_TIME"],
    // });

    // Job.create({
    //   image: unsplashiPadCharts,
    //   title: "Marketing Manager",
    //   body: createRandomBody(),
    //   datePosted: randomPastDate(),
    //   validThrough: randomFutureDate(),
    //   hiringOrganizationName: "Developers Place Inc.",
    //   locationStreetAddress: "John Doe Street 1337",
    //   locationLocality: "Berlin",
    //   locationPostalCode: "10359",
    //   locationCountry: "Germany",
    //   employmentType: ["FULL_TIME", "PART_TIME"],
    // });

    // Job.create({
    //   image: unsplashUxDesigner,
    //   title: "UX Designer",
    //   body: createRandomBody(),
    //   datePosted: randomPastDate(),
    //   validThrough: randomFutureDate(),
    //   hiringOrganizationName: "Developers Place Inc.",
    //   locationStreetAddress: "John Doe Street 1337",
    //   locationLocality: "New York",
    //   locationRegion: "NYC",
    //   locationPostalCode: "11001",
    //   locationCountry: "USA",
    //   employmentType: ["PER_DIEM", "TEMPORARY"],
    // });

    // Job.create({
    //   image: unsplashTypistLaptop,
    //   title: "Full Stack Developer",
    //   body: createRandomBody(),
    //   datePosted: randomPastDate(),
    //   validThrough: randomFutureDate(),
    //   hiringOrganizationName: "Developers Place Inc.",
    //   locationStreetAddress: "John Doe Street 1337",
    //   locationLocality: "San Francisco",
    //   locationRegion: "CA",
    //   locationPostalCode: "94101",
    //   locationCountry: "USA",
    //   employmentType: ["CONTRACTOR", "TEMPORARY"],
    // });

    // Job.create({
    //   image: unsplashNotebookPencil,
    //   title: "Texter",
    //   body: createRandomBody(),
    //   datePosted: randomPastDate(),
    //   validThrough: randomFutureDate(),
    //   hiringOrganizationName: "Developers Place Inc.",
    //   locationStreetAddress: "John Doe Street 1337",
    //   locationLocality: "Berlin",
    //   locationPostalCode: "10367",
    //   locationCountry: "Germany",
    //   employmentType: ["INTERN", "VOLUNTEER"],
    // });

    // Job.create({
    //   image: unsplashMacbookDeveloper,
    //   title: "Full Stack Developer",
    //   body: createRandomBody(),
    //   datePosted: randomPastDate(),
    //   validThrough: randomFutureDate(),
    //   hiringOrganizationName: "Developers Place Inc.",
    //   locationStreetAddress: "Wall Street 1337",
    //   locationLocality: "San Francisco",
    //   locationRegion: "CA",
    //   locationPostalCode: "94103",
    //   locationCountry: "USA",
    //   employmentType: ["FULL_TIME", "PART_TIME", "OTHER"],
    // });

    // // Authors for BlogPosts
    // const janeDoe = Author.create({
    //   title: "Jane Doe",
    //   description: loremIpsum({ units: "sentences", count: 3 }),
    //   image: unsplashFemaleBehindWindow,
    // });

    // const johnDoe = Author.create({
    //   title: "John Doe",
    //   description: loremIpsum({ units: "sentences", count: 3 }),
    //   image: unsplashMaleWithSunglasses,
    // });

    // const authors = [janeDoe, johnDoe];

    // const postImages = [
    //   unsplashAllesCandleWoodTable,
    //   unsplashAppleWorkstationCalendarIpad,
    //   unsplashAppleWorkstationWindcave,
    //   unsplashBikelane,
    //   unsplashBlackTablesWhiteChairs,
    //   unsplashBuildingCornerClouds,
    //   unsplashBusinessPaperRedSocks,
    //   unsplashBusinessPaperWristwatch,
    //   unsplashDeskRuler,
    //   unsplashLadyInCoffeeShop,
    //   unsplashLaptopKeyboard,
    //   unsplashOfficeWindow,
    //   unsplashOfficeWithGlass,
    //   unsplashOutdoorMeeting,
    //   unsplashPlant,
    //   unsplashScreenWithClock,
    //   unsplashWhiteMeetingRoom,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    // ];

    // const eventImages = [
    //   unsplashAllesCandleWoodTable,
    //   unsplashAppleWorkstationCalendarIpad,
    //   unsplashAppleWorkstationWindcave,
    //   unsplashBlackTablesWhiteChairs,
    //   unsplashBuildingCornerClouds,
    //   unsplashBusinessPaperRedSocks,
    //   unsplashBusinessPaperWristwatch,
    //   unsplashDeskRuler,
    //   unsplashLadyInCoffeeShop,
    //   unsplashLaptopKeyboard,
    //   unsplashOfficeWindow,
    //   unsplashOfficeWithGlass,
    //   unsplashOutdoorMeeting,
    //   unsplashPlant,
    //   unsplashScreenWithClock,
    //   unsplashWhiteMeetingRoom,
    // ];

    // const locations = [
    //   {
    //     locationName: "bcc",
    //     locationStreetAddress: "Alexanderstr. 11",
    //     locationLocality: "Berlin",
    //     locationPostalCode: "10178",
    //     locationRegion: "",
    //     locationCountry: "Germany",
    //   },
    //   {
    //     locationName: "Crowne Plaza",
    //     locationStreetAddress: "1605 Broadway",
    //     locationLocality: "New York",
    //     locationPostalCode: "10019",
    //     locationRegion: "NY",
    //     locationCountry: "USA",
    //   },
    //   {
    //     locationName: "Convention Center",
    //     locationStreetAddress: "1201 South Figueroa Street",
    //     locationLocality: "Los Angeles",
    //     locationPostalCode: "90015",
    //     locationRegion: "CA",
    //     locationCountry: "USA",
    //   },
    //   {
    //     locationName: "Empire Riverside Hotel",
    //     locationStreetAddress: "Bernhard-Nocht-Straße 97",
    //     locationLocality: "Hamburg",
    //     locationPostalCode: "20359",
    //     locationRegion: "",
    //     locationCountry: "Germany",
    //   },
    // ];

    // const titles = [
    //   "Javascript Event for Beginners",
    //   "Just an Event for Developers",
    //   "SEO Event for Designers",
    //   "Meeting Event for Designers",
    //   "Design Event for Beginners",
    //   "Marketing Event for Developers",
    //   "Meeting Event for Managers",
    //   "Meeting Event for Everyone",
    //   "Meeting Event for Javascript Developers",
    //   "Management Event for Beginners",
    //   "SEO Event for Beginners",
    //   "Meeting Event for Developers",
    // ];

    // const tags = [
    //   ["Development"],
    //   ["Development"],
    //   ["Design", "Marketing"],
    //   ["Design"],
    //   ["Design"],
    //   ["Marketing"],
    //   ["Business"],
    //   ["Development", "Design", "Marketing", "Business"],
    //   ["Development"],
    //   ["Management"],
    //   ["Marketing"],
    //   ["Development"],
    // ];

    // // Events
    // for (let i = 0; i < 12; i += 1) {
    //   Event.create({
    //     date: randomPastDate(),
    //     image: random(eventImages),
    //     ...random(locations),
    //     title: titles[i],
    //     tags: tags[i],
    //     body: [
    //       new SectionWidget({
    //         content: [
    //           new TextWidget({
    //             text: loremIpsum({
    //               units: "paragraphs",
    //               format: "html",
    //               count: 2,
    //               paragraphLowerBound: 1,
    //               paragraphUpperBound: 10,
    //             }),
    //           }),
    //         ],
    //       }),
    //     ],
    //   });
    // }

    // // BlogPosts
    // for (let i = 0; i < 12; i += 1) {
    //   BlogPost.create({
    //     author: random(authors),
    //     title: capitalizeFirstLetter(loremIpsum({ units: "words", count: 5 })),
    //     titleImage: random(postImages),
    //     subtitle: capitalizeFirstLetter(
    //       loremIpsum({ units: "words", count: 7 })
    //     ),
    //     tags: randomShuffle(DEFAULT_TAGS),
    //     publishedAt: randomPastDate(),
    //     body: [
    //       new SectionWidget({
    //         content: [
    //           new TextWidget({
    //             text: loremIpsum({
    //               units: "paragraphs",
    //               format: "html",
    //               count: 3,
    //               paragraphLowerBound: 1,
    //               paragraphUpperBound: 10,
    //             }),
    //           }),
    //           new ImageWidget({ image: random(postImages.filter(Boolean)) }),
    //           new TextWidget({
    //             text: loremIpsum({
    //               units: "paragraphs",
    //               format: "html",
    //               count: 3,
    //               paragraphLowerBound: 1,
    //               paragraphUpperBound: 10,
    //             }),
    //           }),
    //         ],
    //       }),
    //     ],
    //   });
    // }

    // // BLOG
    // const blog = Blog.create({
    //   _path: "/blog",
    //   _permalink: "blog",
    //   title: "Blog",
    //   navigationBackgroundImage: unsplashPlant,
    //   body: [
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "Latest news from our blog",
    //         }),
    //         new HeadlineWidget({
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //           headline: loremIpsum({ count: 2 }),
    //         }),
    //         new BlogOverviewWidget({}),
    //       ],
    //     }),
    //   ],
    // });

    // // WIDGETS AND PAGES
    // const homeV1 = Page.create({
    //   _path: "/pages_and_widgets/home_v1",
    //   title: "Homepage Variant 1",
    //   navigationBackgroundImage: nightSky,
    //   navigationHeight: "full-height",
    //   navigationSection: [
    //     new ColumnContainerWidget({
    //       alignment: "stretch",
    //       columns: [
    //         // col 1
    //         new ColumnWidget({
    //           colSize: 8,
    //           content: [
    //             new HeadlineWidget({
    //               headline: capitalizeFirstLetter(
    //                 loremIpsum({ units: "words", count: 4 })
    //               ),
    //               style: "h1",
    //             }),
    //             new TextWidget({
    //               text: loremIpsum({
    //                 units: "paragraphs",
    //                 format: "html",
    //                 count: 1,
    //                 paragraphLowerBound: 3,
    //                 paragraphUpperBound: 5,
    //               }),
    //             }),
    //             new ButtonWidget({
    //               target: new Scrivito.Link({
    //                 title: "Call to action",
    //                 obj: root,
    //               }),
    //             }),
    //           ],
    //         }),
    //         // col 2
    //         new ColumnWidget({
    //           colSize: 4,
    //           content: [new ContactFormWidget({})],
    //         }),
    //       ],
    //     }),
    //   ],
    //   body: [
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Our top features",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // col 1
    //             [
    //               new ImageWidget({
    //                 image: unsplashMeetingRoomthree,
    //                 animation: "fadeInLeft",
    //               }),
    //             ],
    //             // col 2
    //             [
    //               new HeadlineWidget({
    //                 level: "h3",
    //                 style: "h2",
    //                 headline: "Content Management for Professionals",
    //               }),
    //               new TextWidget({
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 3,
    //                   paragraphUpperBound: 5,
    //                 }),
    //               }),
    //               new ButtonWidget({
    //                 target: new Scrivito.Link({
    //                   title: "Call to action",
    //                   obj: root,
    //                 }),
    //               }),
    //             ],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // col 1
    //             [
    //               new HeadlineWidget({
    //                 level: "h3",
    //                 style: "h2",
    //                 headline:
    //                   "Are You Asking Your CMS Vendor the Right Questions?",
    //               }),
    //               new TextWidget({
    //                 text: `<p>Choosing the right Content Management System (CMS)
    //                 for your web project at first could appear to be a
    //                 momentous task. However, if you ask the right questions
    //                 before you get too deep, your whole project will come
    //                 together more easily than you can imagine and you'll
    //                 be well on your way to a successful launch.</p><p>Read
    //                 about ten things you can ask a CMS vendor to help
    //                 you choose the right modern Web CMS (PDF).</p>`,
    //               }),
    //               new ButtonWidget({
    //                 target: new Scrivito.Link({
    //                   title: "Download PDF",
    //                   obj: whatToAskPdf,
    //                 }),
    //               }),
    //             ],
    //             // col 2
    //             [
    //               new ImageWidget({
    //                 image: unsplashModernChairDesk,
    //                 animation: "fadeInRight",
    //               }),
    //             ],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "Great feature overview",
    //         }),
    //         new HeadlineWidget({
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //           headline: loremIpsum({ count: 2 }),
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-picture-o",
    //                 "Drag & drop widgets"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-mouse-pointer",
    //                 "WYSIWYG editing"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-cogs",
    //                 "Easy customization"
    //               ),
    //             ],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-comments-o",
    //                 "Full support"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-clone",
    //                 "Tons of widgets"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-mobile",
    //                 "Fully responsive"
    //               ),
    //             ],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       useFullWidth: "yes",
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Watch our video",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         new VideoWidget({
    //           source: videoWaterfall1,
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "Our latest blog news",
    //         }),
    //         new BlogOverviewWidget({
    //           maxItems: 2,
    //         }),
    //         new ButtonWidget({
    //           alignment: "center",
    //           target: new Scrivito.Link({
    //             title: "Load all blog entries",
    //             obj: blog,
    //           }),
    //         }),
    //       ],
    //     }),
    //   ],
    // });
    // const homeV2 = Page.create({
    //   _path: "/pages_and_widgets/home_v2",
    //   title: "Homepage Variant 2",
    //   body: [
    //     new SectionWidget({
    //       content: [
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // col 1
    //             [
    //               new HeadlineWidget({
    //                 level: "h1",
    //                 style: "h2",
    //                 headline: capitalizeFirstLetter(
    //                   loremIpsum({ units: "words", count: 5 })
    //                 ),
    //               }),
    //               createEvenColumnContainerWidget({
    //                 columns: [
    //                   // inner col 1
    //                   [
    //                     new TickListWidget({
    //                       items: [
    //                         new TickListItemWidget({
    //                           statement: capitalizeFirstLetter(
    //                             loremIpsum({ units: "words", count: 4 })
    //                           ),
    //                         }),
    //                         new TickListItemWidget({
    //                           statement: capitalizeFirstLetter(
    //                             loremIpsum({ units: "words", count: 4 })
    //                           ),
    //                         }),
    //                         new TickListItemWidget({
    //                           statement: capitalizeFirstLetter(
    //                             loremIpsum({ units: "words", count: 4 })
    //                           ),
    //                         }),
    //                       ],
    //                     }),
    //                   ],
    //                   // inner col 2
    //                   [
    //                     new TickListWidget({
    //                       items: [
    //                         new TickListItemWidget({
    //                           statement: capitalizeFirstLetter(
    //                             loremIpsum({ units: "words", count: 4 })
    //                           ),
    //                         }),
    //                         new TickListItemWidget({
    //                           statement: capitalizeFirstLetter(
    //                             loremIpsum({ units: "words", count: 4 })
    //                           ),
    //                         }),
    //                         new TickListItemWidget({
    //                           statement: capitalizeFirstLetter(
    //                             loremIpsum({ units: "words", count: 4 })
    //                           ),
    //                         }),
    //                       ],
    //                     }),
    //                   ],
    //                 ],
    //               }),
    //               new ButtonWidget({
    //                 target: new Scrivito.Link({
    //                   title: "Call to action",
    //                   obj: root,
    //                 }),
    //               }),
    //             ],
    //             // col 2
    //             [new ImageWidget({ image: iphone, animation: "zoomIn" })],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Our top features",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // left columns
    //             [
    //               new HeadlineWidget({
    //                 headline: "Amazing features",
    //                 alignment: "right",
    //                 level: "h3",
    //                 style: "h3",
    //               }),
    //               new TextWidget({
    //                 alignment: "right",
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 2,
    //                   paragraphUpperBound: 2,
    //                 }),
    //               }),
    //               new HeadlineWidget({
    //                 headline: "Easy to use",
    //                 alignment: "right",
    //                 style: "h3",
    //               }),
    //               new TextWidget({
    //                 alignment: "right",
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 2,
    //                   paragraphUpperBound: 2,
    //                 }),
    //               }),
    //             ],
    //             // center column
    //             [
    //               new ImageWidget({
    //                 image: iphoneFront,
    //                 alignment: "center",
    //                 animation: "zoomIn",
    //               }),
    //             ],
    //             // right column
    //             [
    //               new HeadlineWidget({
    //                 headline: "Cool and fresh design",
    //                 style: "h3",
    //               }),
    //               new TextWidget({
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 2,
    //                   paragraphUpperBound: 2,
    //                 }),
    //               }),
    //               new HeadlineWidget({
    //                 headline: "Full responsive",
    //                 style: "h3",
    //               }),
    //               new TextWidget({
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 2,
    //                   paragraphUpperBound: 2,
    //                 }),
    //               }),
    //             ],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new YoutubeVideoWidget({
    //           youtubeVideoId: "wrLzv5s8_fE",
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundColor: "greywhite",
    //       content: [
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             // col 1
    //             [
    //               new FactWidget({
    //                 value: "134",
    //                 key: capitalizeFirstLetter(
    //                   loremIpsum({ units: "words", count: 3 })
    //                 ),
    //               }),
    //             ],
    //             // col 2
    //             [
    //               new FactWidget({
    //                 value: "43",
    //                 key: capitalizeFirstLetter(
    //                   loremIpsum({ units: "words", count: 3 })
    //                 ),
    //               }),
    //             ],
    //             // col 3
    //             [
    //               new FactWidget({
    //                 value: "13",
    //                 key: capitalizeFirstLetter(
    //                   loremIpsum({ units: "words", count: 3 })
    //                 ),
    //               }),
    //             ],
    //             // col 4
    //             [
    //               new FactWidget({
    //                 value: "65",
    //                 key: capitalizeFirstLetter(
    //                   loremIpsum({ units: "words", count: 3 })
    //                 ),
    //               }),
    //             ],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Short collection of our awarded work",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h2",
    //           style: "h4",
    //           headline: loremIpsum({ count: 3 }),
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       useFullWidth: "yes",
    //       showPadding: "no",
    //       content: [
    //         new ThumbnailGalleryWidget({
    //           images: [
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 01",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashFinanceIpadCoffee,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 02",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashHoleyKneesCollage,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 03",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashLadyWalkingNight,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 04",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashLookupHighrise,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 05",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashMainstreetBlackcoat,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 06",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashManCheckingWatch,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 07",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashManTieStraighten,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 08",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashMeetingRoomMetal,
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "Great feature overview",
    //         }),
    //         new HeadlineWidget({
    //           level: "h2",
    //           style: "h4",
    //           alignment: "center",
    //           headline: loremIpsum({ count: 2 }),
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-picture-o",
    //                 "Drag & drop widgets"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-mouse-pointer",
    //                 "WYSIWYG editing"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-cogs",
    //                 "Easy customization"
    //               ),
    //             ],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-comments-o",
    //                 "Full support"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-clone",
    //                 "Tons of widgets"
    //               ),
    //             ],
    //             [
    //               createBoxWidgetWithIconHeadlineAndText(
    //                 "fa-mobile",
    //                 "Fully responsive"
    //               ),
    //             ],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundImage: unsplashSilhouetteDancing,
    //       content: [
    //         new HeadlineWidget({
    //           headline: "We are hiring",
    //           style: "h1",
    //           alignment: "center",
    //         }),
    //         new TextWidget({
    //           alignment: "center",
    //           text: loremIpsum({
    //             units: "paragraphs",
    //             format: "html",
    //             count: 1,
    //             paragraphLowerBound: 4,
    //             paragraphUpperBound: 5,
    //           }),
    //         }),
    //         new ButtonWidget({
    //           alignment: "center",
    //           target: new Scrivito.Link({
    //             title: "See full job list",
    //             obj: jobs,
    //           }),
    //         }),
    //       ],
    //     }),
    //   ],
    // });
    // const pagesAndWidgets = Page.create({
    //   _path: "/pages_and_widgets",
    //   _permalink: "pages-and-widgets",
    //   title: "Pages & Widgets",
    //   childOrder: [homeV1, homeV2, landingPage],
    //   body: [
    //     new SectionWidget({
    //       backgroundImage: unsplashWatchTypeBookCoffee,
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           style: "h1",
    //           headline: "Pages",
    //         }),
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h2",
    //           style: "h4",
    //           headline:
    //             "A gallery of page types included in" +
    //             " the Scrivito Example App",
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "yes",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Author Page",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A page to input, update and display an author. Includes a list" +
    //             " of blog posts from the author if present or encourages them to add posts.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             createEvenColumnContainerWidget({
    //               alignment: "stretch",
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Page properties:</p>
    //                       <ul>
    //                         <li>Name</li>
    //                         <li>Description</li>
    //                         <li>Image</li>
    //                         </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: pageAuthorPage,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "yes",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Blog Page",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A page that displays blog posts in a timeline. Includes a tag list section to
    //            limit posts to those including the tag.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             createEvenColumnContainerWidget({
    //               alignment: "stretch",
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Page properties:</p>
    //                       <ul>
    //                         <li>Title</li>
    //                         <li>Header image (Sets the default header image for blog post pages as well.)</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: pageBlogPage,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Blog Post Page",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A page to input, update and display a blog post. When an author is added, their
    //            other blog posts are listed at the bottom. Includes pagination.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             createEvenColumnContainerWidget({
    //               alignment: "stretch",
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Page properties:</p>
    //                       <ul>
    //                         <li>Author</li>
    //                         <li>Published at date</li>
    //                         <li>Header image (optional)</li>
    //                         <li>Tags (optional)</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: pageBlogPostPage,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Event Page",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A page to input, update and display an event. Displays the title, date,
    //            location and description of the event. The body of the event description can be
    //            created with widgets.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             createEvenColumnContainerWidget({
    //               alignment: "stretch",
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Page properties:</p>
    //                       <ul>
    //                         <li>Title</li>
    //                         <li>Date</li>
    //                         <li>Location name</li>
    //                         <li>Street address</li>
    //                         <li>Locality</li>
    //                         <li>Region</li>
    //                         <li>Postal code</li>
    //                         <li>Country</li>
    //                         <li>Image</li>
    //                         <li>Tags</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: pageEventPage,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Homepage",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `The Homepage can only be added once and is not available in the content browser
    //            to prevent duplication. Holds all site specific settings.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             createEvenColumnContainerWidget({
    //               alignment: "stretch",
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Page properties:</p>
    //                       <ul>
    //                         <li>Title</li>
    //                         <li>Header height</li>
    //                         <li>Header background (image or video)</li>
    //                         <li>Header gradient</li>
    //                         <li>Display as landing page</li>
    //                         <li>Site settings, including logos, Facebook and Twitter app ids and API keys.</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: pageHomepage,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Job Page",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A page to input, update and display a job. Displays the title and location, the
    //            body of job description can be created with widgets.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             createEvenColumnContainerWidget({
    //               alignment: "stretch",
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Page properties:</p>
    //                       <ul>
    //                         <li>Job title</li>
    //                         <li>Image</li>
    //                         <li>Date posted</li>
    //                         <li>Valid through</li>
    //                         <li>Employment types</li>
    //                         <li>Name of the hiring organization</li>
    //                         <li>Website of the hiring organization</li>
    //                         <li>Street address</li>
    //                         <li>Locality</li>
    //                         <li>Region</li>
    //                         <li>PostalCode</li>
    //                         <li>Country</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: pageJobPage,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Landing Page",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A page type for building landing pages without a navigation bar, designed to
    //            stand alone.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             createEvenColumnContainerWidget({
    //               alignment: "stretch",
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Page properties:</p>
    //                       <ul>
    //                         <li>Title</li>
    //                         <li>Header height</li>
    //                         <li>Header background (image or video)</li>
    //                         <li>Header gradient</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: pageLandingPage,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Page",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "The base page type creates an empty page ready for widgets.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             createEvenColumnContainerWidget({
    //               alignment: "stretch",
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Page properties:</p>
    //                       <ul>
    //                         <li>Title</li>
    //                         <li>Header height</li>
    //                         <li>Header background (image or video)</li>
    //                         <li>Header gradient</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: pagePage,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Redirect Page",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "The page type to create a redirect to an obj or an external link.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             createEvenColumnContainerWidget({
    //               alignment: "stretch",
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Page properties:</p>
    //                       <ul>
    //                         <li>Title</li>
    //                         <li>Link</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: pageRedirect,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "yes",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Search Results Page",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A page that displays the results of a search.
    //            Displays an additional search box and allows additional filtering by tags
    //            (if any results have tags). Lists results with an image (if present), headline,
    //            text extract, age, tags (if present) and link. Scrivito automatically indexes all
    //            your content including text in PDFs, for every working copy.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             createEvenColumnContainerWidget({
    //               alignment: "stretch",
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Page properties:</p>
    //                       <ul>
    //                         <li>Title</li>
    //                         <li>Header image</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: pageSearchResultsPage,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundImage: unsplashWatchTypeBookCoffee,
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           style: "h1",
    //           headline: "Widgets",
    //         }),
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h2",
    //           style: "h4",
    //           headline:
    //             "A gallery of widgets included in" +
    //             " the Scrivito Example App",
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Address Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A preformatted widget for displaying an address and contact information.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Show brand logo?</li>
    //                         <li>Location name</li>
    //                         <li>Street address</li>
    //                         <li>Locality</li>
    //                         <li>Postal code</li>
    //                         <li>Region</li>
    //                         <li>Country</li>
    //                         <li>Address format</li>
    //                         <li>Phone</li>
    //                         <li>Fax</li>
    //                         <li>Email</li>
    //                         <li>Show border at the bottom?</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   createEvenColumnContainerWidget({
    //                     columns: [
    //                       // inner col 1
    //                       [],
    //                       // inner col 2
    //                       [createAddressWidget({ showBorderBottom: false })],
    //                       // inner col 3
    //                       [],
    //                     ],
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Blog Overview Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: "A widget to display your blog posts in a timeline.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Maximum number of blog posts</li>
    //                         <li>Filter by author</li>
    //                         <li>Filter by tags</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [new BlogOverviewWidget({ maxItems: 2 })],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Box Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A container widget to format the widget(s) used within. Used to overlap widgets.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Background color</li>
    //                         <li>Use offset?</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new BoxWidget({
    //                     body: [
    //                       new ImageWidget({
    //                         alignment: "center",
    //                         image: boxWidgetScreenshot,
    //                       }),
    //                     ],
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Button Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: "A widget for adding a linked button.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Link target and button title</li>
    //                         <li>Alignment</li>
    //                         <li>Background color</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ButtonWidget({
    //                     alignment: "center",
    //                     target: new Scrivito.Link({
    //                       title: "This is a button",
    //                       obj: root,
    //                     }),
    //                   }),
    //                   new ButtonWidget({
    //                     alignment: "center",
    //                     style: "btn-clear",
    //                     target: new Scrivito.Link({
    //                       title: "This is a clear button",
    //                       obj: root,
    //                     }),
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Carousel Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget for images to be displayed as a scrolling carousel with optional description.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Add images</li>
    //                         <li>Show description?</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new CarouselWidget({
    //                     images: [
    //                       unsplashDualingLaptops,
    //                       unsplashClosingLaptop,
    //                       unsplashDeskLaptop,
    //                     ],
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Columns Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A container widget to organize widgets in to multiple columns.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Vertical alignment</li>
    //                         <li>Edit number of columns and their width</li></ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   createEvenColumnContainerWidget({
    //                     columns: [
    //                       // inner col 1
    //                       [
    //                         new TextWidget({
    //                           alignment: "center",
    //                           text:
    //                             "<p>This<br> is<br> Column<br> <b>1</b></p>",
    //                         }),
    //                       ],
    //                       // inner col 2
    //                       [
    //                         new TextWidget({
    //                           alignment: "center",
    //                           text:
    //                             "<p>This<br> is<br> Column<br> <b>2</b></p>",
    //                         }),
    //                       ],
    //                       // inner col 3
    //                       [
    //                         new TextWidget({
    //                           alignment: "center",
    //                           text:
    //                             "<p>This<br> is<br> Column<br> <b>3</b></p>",
    //                         }),
    //                       ],
    //                     ],
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Contact Form Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A simple contact form widget with customizable agreement and button text. When
    //            deployed to Netlify, form data is handled by Netlify forms.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Agreement text</li>
    //                         <li>Submit button text</li>
    //                         <li>Background color</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ContactFormWidget({
    //                     agreementText: `This is the form's
    //                      agreement text.`,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Divider Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget to add a divider between widgets with or without a logo.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Show logo?</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [new DividerWidget({})],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Event Overview Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: "A widget to display multiple event overviews.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Maximum number of events</li>
    //                         <li>Show list of tags?</li>
    //                         <li>Filter by tags</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [new EventOverviewWidget({ maxItems: 2 })],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Fact Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget to display a colored value and a fact description.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget inputs:</p><ul><li>Fact value</li>
    //                       <li>Fact description</li></ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new FactWidget({
    //                     key: "Number of Widgets included in the Example App",
    //                     value: "29",
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Feature Panel Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget to list features with an icon, a headline and a description.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget inputs:</p>
    //                       <ul>
    //                         <li>Headline</li>
    //                         <li>Description</li>
    //                       </ul>
    //                       <br>
    //                       <p>Widget properties:</p>
    //                       <ul>
    //                         <li>Icon for panel</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new FeaturePanelWidget({
    //                     headline: "Drag & drop widgets",
    //                     description: `makes in-place editing possible, in-place
    //                      editing is a web designer's dream`,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Gallery Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget to display multiple images with a fade transition and a thumbnail gallery.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Images for the gallery</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new GalleryWidget({
    //                     images: [
    //                       unsplashDualingLaptops,
    //                       unsplashClosingLaptop,
    //                       unsplashDeskLaptop,
    //                     ],
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Google Maps Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget that adds a Google map to the page. The address can be edited in the widget properties.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Set the Google Maps API key in the site settings.
    //                       If no API key is given, the map may not be rendered.</p>
    //                       <p>Widget properties:</p>
    //                       <ul>
    //                         <li>Address</li>
    //                         <li>Map type</li>
    //                         <li>Zoom level</li>
    //                         <li>Show map widgets?</li>
    //                       </ul>
    //                       `,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new GoogleMapsWidget({
    //                     address: "Times Square, New York City, USA",
    //                     zoom: "12",
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Headline Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget that adds headlines to your page with several formatting and SEO options.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Style</li>
    //                         <li>Heading tag (optional)</li>
    //                         <li>Alignment</li>
    //                         <li>Show dividing line?</li>
    //                         <li>Show margin?</li>
    //                       </ul>
    //                       `,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new HeadlineWidget({
    //                     headline: "This is a Headline",
    //                     style: "h1",
    //                     alignment: "center",
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Icon Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: "A widget displaying a Font Awesome icon.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>
    //                           <a href="http://fontawesome.io/icons/"
    //                             target="_blank"
    //                             rel="noopener noreferrer">Font awesome icon</a>
    //                         </li>
    //                         <li>Size</li>
    //                         <li>Alignment</li>
    //                         <li>Link (optional)</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new IconWidget({
    //                     size: "fa-5x",
    //                     alignment: "center",
    //                     link: new Scrivito.Link({
    //                       title: "This is a link",
    //                       obj: root,
    //                     }),
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Icon List Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget displaying one or more icons that can be rearranged.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Icon list</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [createRandomIconContainerWidget("fa-5x")],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Image Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A widget to display an image. Drag an image file from your computer to the drop
    //            zone or choose the image using the Content Browser (just click the widget).`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Animation</li>
    //                         <li>Alignment</li>
    //                         <li>Alternative text (optional)</li>
    //                         <li>Link (optional)</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: imageWidgetScreenshot,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Job Overview Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: "A widget to disply multiple Job page details.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Filter by location</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [new JobOverviewWidget({})],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Link List Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A widget containing link widgets with an optional headline and easy
    //            drag-and-drop organization.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Headline</li>
    //                         <li>Links</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   createEvenColumnContainerWidget({
    //                     columns: [
    //                       // inner col 1
    //                       [],
    //                       // inner col 2
    //                       [
    //                         new LinkContainerWidget({
    //                           headline: "This is a Link List",
    //                           links: [
    //                             new LinkWidget({
    //                               link: new Scrivito.Link({ obj: root }),
    //                             }),
    //                             new LinkWidget({
    //                               link: new Scrivito.Link({ obj: homeV1 }),
    //                             }),
    //                             new LinkWidget({
    //                               link: new Scrivito.Link({ obj: homeV2 }),
    //                             }),
    //                             new LinkWidget({
    //                               link: new Scrivito.Link({ obj: landingPage }),
    //                             }),
    //                           ],
    //                         }),
    //                       ],
    //                       // inner col 3
    //                       [],
    //                     ],
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Pricing Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget to add a styled pricing section to a page with customizable fields and specs.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Currency</li>
    //                         <li>Small plan button</li>
    //                         <li>Medium plan button</li>
    //                         <li>Large plan button</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [createPricingWidget(root)],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Section Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A container widget to organize the layout of a page into sections, styled for
    //            the example app layout.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Background color</li>
    //                         <li>Background image</li>
    //                         <li>Use full width?</li>
    //                         <li>Use full screen height?</li>
    //                         <li>Show padding?</li>
    //                       </ul>
    //                       `,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: sectionWidgetScreenshot,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Space Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget for adding adjustable vertical space between widgets.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Size (height)</li>
    //                       </ul>
    //                       `,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ImageWidget({
    //                     alignment: "center",
    //                     image: spaceWidgetScreenshot,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Table Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A widget that provides a customizable table for organized data and an optional
    //            summary row.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Rows</li>
    //                         <li>Summary rows</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new TableWidget({
    //                     rows: [
    //                       new TableRowWidget({
    //                         cell1: "Key feature 1",
    //                         cell2: [
    //                           new TextWidget({
    //                             alignment: "center",
    //                             text: "<p><b>5</b></p>",
    //                           }),
    //                         ],
    //                         cell3: [
    //                           new TextWidget({
    //                             alignment: "center",
    //                             text: "<p><b>10</b></p>",
    //                           }),
    //                         ],
    //                         cell4: [
    //                           new TextWidget({
    //                             alignment: "center",
    //                             text: "<p><b>unlimited</b></p>",
    //                           }),
    //                         ],
    //                       }),
    //                       new TableRowWidget({
    //                         cell1: "Key feature 2",
    //                         cell2: [
    //                           new TextWidget({
    //                             alignment: "center",
    //                             text: "<p><b>20</b></p>",
    //                           }),
    //                         ],
    //                         cell3: [
    //                           new TextWidget({
    //                             alignment: "center",
    //                             text: "<p><b>40</b></p>",
    //                           }),
    //                         ],
    //                         cell4: [
    //                           new TextWidget({
    //                             alignment: "center",
    //                             text: "<p><b>unlimited</b></p>",
    //                           }),
    //                         ],
    //                       }),
    //                     ],
    //                     summaryRows: [
    //                       new TableRowWidget({
    //                         cell1: "Prices",
    //                         cell2: [
    //                           new PriceWidget({
    //                             price: "29",
    //                             currency: "€",
    //                             period: "/mo",
    //                           }),
    //                         ],
    //                         cell3: [
    //                           new PriceWidget({
    //                             price: "59",
    //                             currency: "€",
    //                             period: "/mo",
    //                           }),
    //                         ],
    //                         cell4: [
    //                           new PriceWidget({
    //                             price: "99",
    //                             currency: "€",
    //                             period: "/mo",
    //                           }),
    //                         ],
    //                       }),
    //                     ],
    //                     header1: "Features",
    //                     header2: "Basic",
    //                     header3: "Team",
    //                     header4: "Corporate",
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Testimonial Slider Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A widget to add styled testimonials to a page with a quote, author information
    //            and an image.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Testimonials</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new TestimonialSliderWidget({
    //                     testimonials: [
    //                       new TestimonialWidget({
    //                         testimonial: loremIpsum({
    //                           units: "sentences",
    //                           count: 2,
    //                         }),
    //                         author: "Alice Smith, CEO @ Acme",
    //                         authorImage: unsplashFemalePortrait1,
    //                       }),
    //                       new TestimonialWidget({
    //                         testimonial: loremIpsum({
    //                           units: "sentences",
    //                           count: 2,
    //                         }),
    //                         author: "Bob Johnson, CTO @ MegaCorp",
    //                         authorImage: unsplashMalePortrait1,
    //                       }),
    //                       new TestimonialWidget({
    //                         testimonial: loremIpsum({
    //                           units: "sentences",
    //                           count: 2,
    //                         }),
    //                         author: "Mary Williams, CTO @ The Company",
    //                         authorImage: unsplashFemalePortrait2,
    //                       }),
    //                     ],
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Text Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A widget that displays an HTML content field for adding styled text to a page.
    //            Highlighting text opens a toolbar for formating text or adding links.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Alignment</li>
    //                         <li>Text</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new TextWidget({
    //                     text: "This is a Text Widget",
    //                     alignment: "center",
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Thumbnail Gallery Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A widget that displays clickable thumbnail images with an icon and description
    //            when hovered over. Clicking enlarges the images into a Lightbox type gallery.`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Images</li>
    //                         <li>Show list of tags?</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new ThumbnailGalleryWidget({
    //                     images: [
    //                       new ThumbnailGalleryImageWidget({
    //                         title: "Project 01",
    //                         subtitle: loremIpsum({ units: "words", count: 5 }),
    //                         image: unsplashWhiteMeetingRoom,
    //                       }),
    //                       new ThumbnailGalleryImageWidget({
    //                         title: "Project 02",
    //                         subtitle: loremIpsum({ units: "words", count: 5 }),
    //                         image: unsplashHandcraft,
    //                       }),
    //                       new ThumbnailGalleryImageWidget({
    //                         title: "Project 03",
    //                         subtitle: loremIpsum({ units: "words", count: 5 }),
    //                         image: unsplashLaptopKeyboard,
    //                       }),
    //                       new ThumbnailGalleryImageWidget({
    //                         title: "Project 04",
    //                         subtitle: loremIpsum({ units: "words", count: 5 }),
    //                         image: unsplashDeskRuler,
    //                       }),
    //                     ],
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Tick List Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             "A widget that displays a list of statements, each styled with a checkmark icon.",
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: "<p>No widget properties</p>",
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   createEvenColumnContainerWidget({
    //                     columns: [
    //                       // inner col 1
    //                       [],
    //                       // inner col 2
    //                       [
    //                         new TickListWidget({
    //                           items: [
    //                             new TickListItemWidget({
    //                               statement: capitalizeFirstLetter(
    //                                 loremIpsum({ units: "words", count: 3 })
    //                               ),
    //                             }),
    //                             new TickListItemWidget({
    //                               statement: capitalizeFirstLetter(
    //                                 loremIpsum({ units: "words", count: 3 })
    //                               ),
    //                             }),
    //                             new TickListItemWidget({
    //                               statement: capitalizeFirstLetter(
    //                                 loremIpsum({ units: "words", count: 3 })
    //                               ),
    //                             }),
    //                           ],
    //                         }),
    //                       ],
    //                       // inner col 3
    //                       [],
    //                     ],
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Video Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text: `A widget that plays video resources stored in the Scrivto CMS, uploaded via
    //            the Content Browser (just click the widget).`,
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Video</li>
    //                         <li>Poster image (optional)</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new VideoWidget({
    //                     source: videoWaterfall1,
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "Vimeo Video Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             '<p>A widget that plays videos from <a href="https://vimeo.com" target="_blank" rel="noopener">Vimeo</a>.</p>',
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>Vimeo video ID</li>
    //                         <li>Aspect ratio</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new VimeoVideoWidget({
    //                     vimeoVideoId: "15069551",
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       showPadding: "no",
    //       content: [
    //         new HeadlineWidget({
    //           headline: "YouTube Video Widget",
    //           level: "h2",
    //           style: "h1",
    //           showMargin: "no",
    //         }),
    //         new TextWidget({
    //           alignment: "left",
    //           text:
    //             '<p>A widget that plays videos from <a href="https://www.youtube.com" target="_blank" rel="noopener">YouTube</a>.</p>',
    //         }),
    //         new BoxWidget({
    //           body: [
    //             create3to9ColumnContainerWidget({
    //               columns: [
    //                 // col 1
    //                 [
    //                   new TextWidget({
    //                     alignment: "left",
    //                     text: `<p>Widget properties:</p>
    //                       <ul>
    //                         <li>YouTube video ID</li>
    //                         <li>Aspect ratio</li>
    //                       </ul>`,
    //                   }),
    //                 ],
    //                 // col 2
    //                 [
    //                   new YoutubeVideoWidget({
    //                     youtubeVideoId: "wrLzv5s8_fE",
    //                   }),
    //                 ],
    //               ],
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //   ],
    // });

    // // Search results page
    // SearchResults.create({
    //   title: "Search Results",
    //   navigationBackgroundImage: unsplashGlassesSunset,
    //   _permalink: "search-results",
    // });

    // // Redirect to UI
    // const redirectToUi = RedirectToUi.create({ _permalink: "start-editing" });

    // // Obj.root()
    // root.update({
    //   childOrder: [product, about, pricing, blog, pagesAndWidgets],
    //   dividerLogo: scrivitoLogoRed,
    //   logoDark: scrivitoLogoDark,
    //   logoWhite: scrivitoLogoWhite,
    //   navigationBackgroundImage: unsplashHandcraft,
    //   navigationHeight: "full-height",
    //   navigationSection: [
    //     new HeadlineWidget({
    //       alignment: "center",
    //       headline: "Welcome to your Scrivito Example App",
    //       style: "h1",
    //     }),
    //     new TextWidget({
    //       alignment: "center",
    //       text: `<p>The Scrivito Example App is intended to be both a playground
    //         and a foundation for your own website. <br>Built entirely with
    //         Scrivito, it can be fully customized as your own.</p><p>To begin
    //         editing, add <b><a href="objid:${redirectToUi.id()}">/scrivito</a></b>
    //         to the URL above.<br>
    //         Then activate Edit mode on the top and click on any text to change.<br>
    //         When you are done making changes click 'Publish' at the top panel of the page.</p>`,
    //     }),
    //     new ButtonWidget({
    //       alignment: "center",
    //       target: new Scrivito.Link({
    //         title: "Begin Editing",
    //         obj: redirectToUi,
    //       }),
    //     }),
    //   ],
    //   title: "Welcome to the Scrivito Example App!",
    //   body: [
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Getting Started",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // col 1
    //             [
    //               new ImageWidget({
    //                 image: unsplashLaptopKeyboard,
    //                 animation: "fadeInLeft",
    //               }),
    //             ],
    //             // col 2
    //             [
    //               new HeadlineWidget({
    //                 level: "h3",
    //                 style: "h2",
    //                 headline: "Add a New Widget",
    //               }),
    //               new TextWidget({
    //                 text: `<p>Widgets are the building blocks of your content.
    //                 Adding widgets is simple. If you are in editing mode
    //                 (just add /scrivito/ to the URL above and switch from
    //                 Preview mode to Edit mode) you will see a green frame
    //                 around this text when you hover over it. Green frames
    //                 are used for widgets containing content. You will also see
    //                 yellow frames, meant to contain other widgets and blue
    //                 frames meant to contain navigations. To add a new
    //                 widget click on one of the green boxes with a white plus
    //                 sign above or below the green frame. Then select the
    //                 widget from the Widget Browser and add the corresponding
    //                 content to the type of widget you selected. Go ahead, give
    //                 it a try!</p>`,
    //               }),
    //               new ButtonWidget({
    //                 target: new Scrivito.Link({
    //                   title: "Learn more about Widgets",
    //                   url:
    //                     "https://www.scrivito.com/working-with-pages-b18e54057ee4ac4e",
    //                   target: "_blank",
    //                   rel: "noopener",
    //                 }),
    //               }),
    //             ],
    //           ],
    //         }),
    //         createEvenColumnContainerWidget({
    //           alignment: "stretch",
    //           columns: [
    //             // col 1
    //             [
    //               new HeadlineWidget({
    //                 level: "h3",
    //                 style: "h2",
    //                 headline: "Add a New Page",
    //               }),
    //               new TextWidget({
    //                 text: `<p>Pages have a defined layout and are meant to be a
    //                framework to begin editing. To create a new page, <a
    //                href="https://www.scrivito.com/working-with-pages-b18e54057ee4ac4e"
    //                target="_blank" rel="noopener">activate the Edit mode</a> via
    //                the Scrivito panel. Next, note that there are two options
    //                for where and how to create a new page. If you want to add
    //                a page to the defined navigation hierarchy then select 'Add
    //                page' from the menu of a blue navigation handle in the
    //                navigation bar. If you wish to add a new page without a link in the
    //                navigation you can select 'Create page' from the hamburger/
    //                page menu in the top right corner of this page. How about
    //                adding a landing page!?</p>`,
    //               }),
    //               new ButtonWidget({
    //                 target: new Scrivito.Link({
    //                   title: "Learn more about Pages",
    //                   url:
    //                     "https://www.scrivito.com/working-with-pages-b18e54057ee4ac4e",
    //                   target: "_blank",
    //                   rel: "noopener",
    //                 }),
    //               }),
    //             ],
    //             // col 2
    //             [
    //               new ImageWidget({
    //                 image: unsplashDeskRuler,
    //                 animation: "fadeInRight",
    //               }),
    //             ],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Different homepage variants",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             // col 1
    //             [
    //               new ImageWidget({
    //                 image: homepage1Screenshot,
    //                 link: new Scrivito.Link({ obj: homeV1 }),
    //                 animation: "zoomIn",
    //               }),
    //               new HeadlineWidget({
    //                 headline: "Choose a different homepage variant",
    //                 alignment: "center",
    //                 style: "h3",
    //               }),
    //               new TextWidget({
    //                 alignment: "center",
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 3,
    //                   paragraphUpperBound: 5,
    //                 }),
    //               }),
    //               new ButtonWidget({
    //                 alignment: "center",
    //                 target: new Scrivito.Link({
    //                   title: "Open Homepage variant 1",
    //                   obj: homeV1,
    //                 }),
    //               }),
    //             ],
    //             // col 2
    //             [
    //               new ImageWidget({
    //                 image: homepage2Screenshot,
    //                 link: new Scrivito.Link({ obj: homeV2 }),
    //                 animation: "zoomIn",
    //               }),
    //               new HeadlineWidget({
    //                 headline: "Choose a different homepage variant",
    //                 alignment: "center",
    //                 style: "h3",
    //               }),
    //               new TextWidget({
    //                 alignment: "center",
    //                 text: loremIpsum({
    //                   units: "paragraphs",
    //                   format: "html",
    //                   count: 1,
    //                   paragraphLowerBound: 3,
    //                   paragraphUpperBound: 5,
    //                 }),
    //               }),
    //               new ButtonWidget({
    //                 alignment: "center",
    //                 target: new Scrivito.Link({
    //                   title: "Open Homepage variant 2",
    //                   obj: homeV2,
    //                 }),
    //               }),
    //             ],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           headline: "Short collection of our awarded work",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //         }),
    //         new TextWidget({
    //           alignment: "center",
    //           text: loremIpsum({
    //             units: "paragraphs",
    //             format: "html",
    //             count: 1,
    //             paragraphLowerBound: 3,
    //             paragraphUpperBound: 5,
    //           }),
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       useFullWidth: "yes",
    //       showPadding: "no",
    //       content: [
    //         new ThumbnailGalleryWidget({
    //           images: [
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 01",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashWhiteMeetingRoom,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 02",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashHandcraft,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 03",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashLaptopKeyboard,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 04",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashDeskRuler,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 05",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashOfficeWithGlass,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 06",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashOfficeWindow,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 07",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashOutdoorMeeting,
    //             }),
    //             new ThumbnailGalleryImageWidget({
    //               title: "Project 08",
    //               subtitle: loremIpsum({ units: "words", count: 5 }),
    //               image: unsplashScreenWithClock,
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "Our latest blog news",
    //         }),
    //         new BlogOverviewWidget({
    //           maxItems: 2,
    //         }),
    //         new ButtonWidget({
    //           alignment: "center",
    //           target: new Scrivito.Link({
    //             title: "Load all blog entries",
    //             obj: blog,
    //           }),
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       content: [
    //         new HeadlineWidget({
    //           alignment: "center",
    //           level: "h1",
    //           style: "h2",
    //           showDividingLine: "yes",
    //           headline: "What people are saying",
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundImage: unsplashWhiteMeetingRoom,
    //       content: [
    //         new TestimonialSliderWidget({
    //           testimonials: [
    //             new TestimonialWidget({
    //               testimonial: loremIpsum({ units: "sentences", count: 2 }),
    //               author: "Alice Smith, CEO @ Acme",
    //               authorImage: unsplashFemalePortrait1,
    //             }),
    //             new TestimonialWidget({
    //               testimonial: loremIpsum({ units: "sentences", count: 2 }),
    //               author: "Bob Johnson, CTO @ MegaCorp",
    //               authorImage: unsplashMalePortrait1,
    //             }),
    //             new TestimonialWidget({
    //               testimonial: loremIpsum({ units: "sentences", count: 2 }),
    //               author: "Mary Williams, CTO @ The Company",
    //               authorImage: unsplashFemalePortrait2,
    //             }),
    //             new TestimonialWidget({
    //               testimonial: loremIpsum({ units: "sentences", count: 2 }),
    //               author: "Robert Jones, CEO @ Next Big Thing",
    //               authorImage: unsplashMalePortrait2,
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //   ],
    // });

    // // Footer
    // const footerLinks1 = new LinkContainerWidget({
    //   headline: "Homepages",
    //   links: [
    //     new LinkWidget({ link: new Scrivito.Link({ obj: root }) }),
    //     new LinkWidget({ link: new Scrivito.Link({ obj: homeV1 }) }),
    //     new LinkWidget({ link: new Scrivito.Link({ obj: homeV2 }) }),
    //     new LinkWidget({ link: new Scrivito.Link({ obj: landingPage }) }),
    //   ],
    // });
    // const footerLinks2 = new LinkContainerWidget({
    //   headline: "About",
    //   links: [
    //     new LinkWidget({ link: new Scrivito.Link({ obj: jobs }) }),
    //     new LinkWidget({ link: new Scrivito.Link({ obj: contact }) }),
    //     new LinkWidget({ link: new Scrivito.Link({ obj: imprint }) }),
    //     new LinkWidget({ link: new Scrivito.Link({ obj: events }) }),
    //   ],
    // });

    // root.update({
    //   footer: [
    //     new SectionWidget({
    //       backgroundColor: "greywhite",
    //       content: [
    //         createEvenColumnContainerWidget({
    //           columns: [
    //             [createAddressWidget({ showBorderBottom: false })],
    //             [footerLinks1],
    //             [footerLinks2],
    //           ],
    //         }),
    //       ],
    //     }),
    //     new SectionWidget({
    //       backgroundColor: "greydark",
    //       showPadding: "no",
    //       content: [createRandomIconContainerWidget()],
    //     }),
    //   ],
    // });

    console.log("Created all objs/widget. Now uploading binaries...");
  });
}

export default importContent;
