---
title: "Day 130: MapLoading"
blogSeries: "Journey To: Software Engineer"
blogLine: "From warehouse racks to full stack"
date: "August 21, 2025"
description: "Reading a text file and extrapolating the map."
---

Hello friends,

<br>

Today I dove into the world of opening text files. I knew this would be an integral part of game development and any type of backend development really so I was stoked to get into it.

<br>

## How To Load A File

<br>

The way I remember opening a file is as follows. You try to open it, then if successful, using a while loop, you iterate through every line until there are no more. I remember doing this as well with image files following a similar logic. Here, it looks like this:

<br>

```cpp
std::string line;
std::ifstream file(filename);

if (file.is_open())
{
    while(std::getLine(file, line))
    {
        if (line == "[Map]")
        {
            std::cout << "File is valid" << std::endl;
            continue;
        }
        else
        {
            std::cout << "File is not valid" << std::endl;
            break
        }
    }
}
```

<br>

So here I open up the file, and check if the first line contains [Map], which is what I've used to define a map file. If it does it continues, if not, it ends. Next I create a class for the kind of data I'm expecting.

<br>

```cpp
struct MapData
{
	int version;

	std::string tileSheet = "";
	std::string name = "";

	int mapWidth = 0;
	int mapHeight = 0;

	int tileWidth = 0;
	int tileHeight = 0;

	int dataLength = 0;
	int* data = nullptr;
};
```

<br>

The file is separated by equal signs so I first split the variable and value accordingly, then assign them respectively.

<br>

```cpp
int count = line.find("=");
std::string variable = line.substr(0, count);
std::string value = line.substr(count + 1);

if (variable == "version")
    mapData.version = std::stoi(value);
```

<br>

Note I'm not just assigning mapData.version to the value, I must first convert the string to an int.

<br>

The data value is a bit more complicated but essentially I'm moving the count and offset through the line until I get all the values. I'm sure this will be revisited as it's currently a very fragile system wherein one small change to the syntax of the file will break my code.

<br>

Last but certainly not least, end all file opens with:

<br>

```cpp
file.close();
```

<br>

There you have it, now I'm reading the file and saving it's values in an object. Next up is creating an actual map editor. But for today this was enough. Thank you for reading today's blog, I with you all the best on your personal journeys, friends.
