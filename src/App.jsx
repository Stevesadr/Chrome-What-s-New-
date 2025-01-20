import Header from "./Components/Header";
import MainBody from "./Components/MainBody";
import Card from "./Components/Card";
import { GrFormNextLink } from "react-icons/gr";
import Footer from "./Components/Footer";

function App() {
  const items = [
    {
      id: 1,
      category: "Security",
      title: "Check out more quickly and securely with autofill",
      description:
        "Fill in your full payment card details the same way you unlock your device - with a fingerprint, face scan, or screen lock PIN - instead of entering your card security code.",
      worker: [
        "Go to Settings > Autofill and passwords > Payment methods.",
        "Select Manually verify every time you pay using autofill to use your biometrics the next time you checkout.",
      ],
      imgae:
        "https://www.google.com/chrome/static/images/whats-new/129/mac/pay-2x.webp",
    },
    {
      id: 2,
      category: "Search",
      title: "Search anything you see on any page with Google Lens",
      description:
        "Google Lens in Chrome makes it easy to search anything you see on your screen. Search within a video you're watching, a slide in a livestream, or an image on a webpage. Google Lens will give you answers right there, in your tab, and you can continue browsing with the new information you’ve found.",
      worker: [
        "Open the Chrome menu",
        "Select Search with Google Lens ",
        "Select anything on the page by clicking and dragging anywhere on the page.",
        "Refine the answers by typing in the search box in the side panel.",
        "For quicker access, click Pin  in the side panel to add the icon to your toolbar.",
      ],
      imgae:
        "https://www.google.com/chrome/static/images/whats-new/128/v1/mac/lens-2x.webp",
    },
    {
      id: 3,
      category: "Search",
      title: "Chat with Gemini from the address bar",
      description:
        "You can quickly get help from Gemini with creative and complex tasks, like planning a trip or learning more about a new topic with this new shortcut in Chrome.",
      worker: [
        "Type “@” in the address bar and select Chat with Gemini.",
        "Write your prompt.",
        "Get your response on gemini.google.com.",
      ],
      imgae:
        "https://www.google.com/chrome/static/images/whats-new/128/v1/mac/gemini-2x.webp",
    },
    {
      id: 4,
      category: "Customize",
      title: "Pin your favorite features to the toolbar",
      description:
        "You can pin your favorite side-panel features like Bookmarks and Reading Mode to the toolbar.",
      worker: [
        "From the Chrome menu , open the feature you want to pin",
        "Your selected feature will open in the side panel.",
        "At the top of the side panel, click Pin ",
      ],
      imgae:
        "https://www.google.com/chrome/static/images/whats-new/127-side-panel-pinning/mac/pin-2x.webp",
    },
  ];
  const moreFeatures = [
    {
      id: 1,
      category: "Search",
      title: "Search and get related suggestions",
      date: "May 2024",
      description:
        "Get suggestions in the search box related to your previous searches based on similar things others are looking for.",
      worker: [
        "Open a New tab +",
        "Click the search box to see suggestions related to your previous searches.",
        "Click on the topics to view search results.",
      ],
      imgae:
        "https://www.google.com/chrome/static/images/whats-new/125/mac/search-suggestions-2x.webp",
    },
    {
      id: 2,
      category: "Safety",
      title: "Review your privacy & security with Safety Check",
      date: "May 2024",
      description:
        "Chrome will let you know when there are safety recommendations for you. You can also visit Safety Check at any time to see info about your privacy and security settings and to learn how Chrome keeps you safe.",
      worker: [
        "At the top right, open Chrome Menu  and select Settings .",
        "Click Privacy and Security.",
        "Select Go to Safety Check.",
      ],
      imgae:
        "https://www.google.com/chrome/static/images/whats-new/125/mac/review-privacy-2x.webp",
    },
    {
      id: 3,
      category: "Artificial Intelligence",
      title: "Create a unique image using AI to set as your Chrome theme",
      date: "March 2024",
      description:
        "Combine your imagination with subject, style, mood, and color options to bring your custom theme to life.",
      worker: [
        "In settings, turn on Create themes with AI.",
        "Open a New tab  and at the bottom of the page, click Customize Chrome.",
        "Under Appearance, click Change theme.",
        "Under Themes, click Create with AI.",
        "Choose from subjects, styles, moods, and colors, and click Create.",
      ],
      imgae:
        "https://www.google.com/chrome/static/images/whats-new/123/mac/gen-ai-theming-2x.webp",
    },
    {
      id: 4,
      category: "Artificial Intelligence",
      title: "Write with more confidence across the web",
      date: "March 2024",
      description:
        "You can enter a few words or a first draft to get AI writing suggestions from Chrome",
      worker: [
        "In settings, turn on Help me write.",
        "Go to a site where you want to write.",
        "Right-click on any open text box and select Help me write, then enter a few words or a first draft into the prompt box.",
        "Click Create to get a writing suggestion. If needed, you can change the length or tone of the suggestion.",
        "When you’re happy with the suggestion, click Insert to paste it into the open text box.",
      ],
      imgae:
        "https://www.google.com/chrome/static/images/whats-new/123/mac/helpmewrite-2x.webp",
    },
    {
      id: 5,
      category: "Artificial Intelligence",
      title: "Smartly organize your open tabs",
      date: "March 2024",
      description:
        "To help you stay organized, Chrome can suggest and help you create tab groups.",
      worker: [
        "In settings, turn on Tab organizer.",
        "At the top right of your browser, click Tab Search ",
        "Under the Organize tabs section, click Check Now to get a tab group suggestion.",
        "You can edit the group name or remove tabs.",
        "When you’re happy with the group, click Create Group.",
      ],
      imgae:
        "https://www.google.com/chrome/static/images/whats-new/123/mac/helpmewrite-2x.webp",
    },
    {
      id: 6,
      category: "Productivity",
      title: "Save your tab groups for later",
      date: "February 2024",
      description:
        "You can save and open tab groups across desktop devices when you need them. This makes it easier to clean up your tab strip and focus on the thing you need to get done, right now.",
      worker: [
        "Right-click a Tab and select Add tab to group.",
        "Turn on Save group and your group will appear in the bookmarks bar. ",
        "To remove the group from your tab strip but keep it for later, right-click the group header and select Hide.",
        "On a different desktop device, sign-in and see your groups in the bookmark bar.",
      ],
      imgae:
        "https://www.google.com/chrome/static/images/whats-new/122/mac/tab-groups-2x.webp",
    },
  ];
  return (
    <>
      <div className="parent  flex justify-center">
        <Header />
      </div>
      <MainBody item={items} />
      <h1 className="w-full mb-5 text-center lg:text-6xl">
        Explore more features
      </h1>
      <div className="w-full flex justify-center items-center ">
        <div className="w-full  flex flex-col items-center justify-center   lg:grid lg:grid-cols-3">
          {moreFeatures.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="group transition bg-blue-500 text-black w-16 h-5 text-[7px] lg:text-base lg:w-28 lg:h-11 lg:mb-7 flex items-center justify-center rounded-xl">
          View more{" "}
          <GrFormNextLink className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
