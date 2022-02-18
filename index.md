> **What's Holy Grail challenge?**
> The Holy Grail challenge requires player to collect every single of the 506 unique and set items in the game.

## Download

[Windows 64-bit](https://github.com/zeddicus-pl/d2rHolyGrail/releases/latest/download/HolyGrail-win32-x64.zip)

[MacOS](https://github.com/zeddicus-pl/d2rHolyGrail/releases/latest/download/HolyGrail-macos.zip)

## Streamers using the app

I created this application for my favourite streamer [NadinWins](https://www.twitch.tv/nadinwins) and I made it Open Source, so other players, and other streamers, can use and modify it freely.

(look in the upper right corner, and watch out, **high volume!**)

<iframe src="https://clips.twitch.tv/embed?clip=DreamyPlacidScallionPeoplesChamp-QfdXJQ9MKHuO9owj&parent=holygrail.link" style="margin:auto; width: 640px; height: 480px; border: 0px; max-width: 100%"></iframe>

## Changelog

### v1.6.0
- Added manual selection mode
- Added choosing between softcore and hardcode game modes
- Added sharing functionality

### v1.5.1
- Added Plugy support
- Added search functionality
- Few minor bugfix and PL translation fixes

Beta versions: 1.4 and below

Older versions can be found on [the releases page on GitHub](https://github.com/zeddicus-pl/d2rHolyGrail/releases)

## Screenshots

<img width="1195" alt="Screenshot 2022-02-15 at 18 07 47" src="https://user-images.githubusercontent.com/79473394/154112597-e2f2753b-83ba-41ae-93f6-844c04c38d07.png">

<img width="1194" alt="Screenshot 2022-02-15 at 18 08 01" src="https://user-images.githubusercontent.com/79473394/154112605-729bab3b-edcf-4f70-8981-1ffe88587fb0.png">

<img width="1193" alt="Screenshot 2022-02-15 at 18 07 33" src="https://user-images.githubusercontent.com/79473394/154112617-68eca365-f0ee-4243-a5ac-cb7c3cbb4acb.png">

## How to use

- Download and unpack anywhere
- Run the application
- Upon start the app will ask you to show where your saved games location is.

Diablo 2 Resurrected store the saves in your home folder, in "Saved Games" folder.
Point the application to read saves from there, and it will remember this location (can be changed in settings).

The Holy Grail app will work with D2R saves, as well as classic D2 LoD saves, it also supports reading Plugy stash files (if placed in the same folder as game saves, not in subfolder)

The app will show you your Holy Grail stats, and **will continue watching for file changes**, so if you run it in the background and play the game, the stats will update automatically.

The saves files are saved to disk each time you identify an item (and when do some other actions) and each 5 minutes as well - that's when the Holy Grail app will notice the change and update the stats.

In practice this works very smooth, allowing you to see new items nearly real-time.

The app also has a HTTP feed to use in OBS (with Browser component) which can be used if you stream your Diablo 2 Resurrected gameplay.

### INFO:
This app is still in testing phase, so please report any issues. It will never try to modify save files, so this is safe to use. Also, the app may ask your windows firewall about network access, because it has that HTTP feed functionality. I'll make it configurable in future so it can be turned on/off.

### Licence and credits

The app uses ISC licence.

If you want to contribute your code changes, or would like to create another translation (you'll have to translate all item names etc.) then feel free to PR it on GitHub. If you are not a programmer, and would like to translate the app - contact us [on Discord](https://discord.com/channels/837488572838838292/939605281288122418)

GitHub repo: [https://github.com/zeddicus-pl/d2rHolyGrail](https://github.com/zeddicus-pl/d2rHolyGrail)

Libraries and applications I use, or get data from:
- D2S file parsing library: [https://github.com/dschu012/d2s](https://github.com/dschu012/d2s)
- Item list and UI inspiration: [https://d2-holy-grail.herokuapp.com](https://d2-holy-grail.herokuapp.com) / [https://github.com/Nasicus/d2-holy-grail](https://github.com/Nasicus/d2-holy-grail)

The app was developed together with NadinWins stream community. Big thanks to everyone involved in testing and creation of Polish translation of all the items.