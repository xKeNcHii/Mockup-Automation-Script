# Mockup Automation Script (Photoshop Image Processor)

This repository contains a Photoshop script to automate the process of placing images into mockups and saving the results. The script provides a user-friendly interface to select input and output folders, as well as mockup files.

## Table of Contents

- [Photoshop Image Processor](#photoshop-image-processor)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
    - [Method 1](#method-1)
    - [Method 2](#method-2)
    - [Method 3 (Recommended):](#method-3-recommended)
  - [Usage](#usage)
  - [Compatibility](#compatibility)
  - [Contributing](#contributing)
  - [License](#license)
  - [Example](#example)

## Introduction

Photoshop Image Processor is a script designed to streamline the workflow of designers and photographers who need to place multiple images into mockups and save the results. It is particularly useful for tasks like creating product presentations, portfolios, or social media posts.

## Features

- User-friendly interface
- Support for multiple input formats (JPG, JPEG, PNG, GIF, TIFF, and WEBP)
- Customizable output folder
- Support for multiple mockup files
- Efficient image processing

## Installation

There are a few ways to install the downloaded .jsx file in Photoshop:

### Method 1:

1. Locate the downloaded .jsx file on your computer.
2. Drag and drop the .jsx file onto the Photoshop icon in your dock or applications folder.
3. The script will be automatically installed and available in the `File > Scripts` menu in Photoshop.

### Method 2:

1. Open Photoshop.
2. Go to `File > Scripts > Browse`.
3. Navigate to the downloaded .jsx file on your computer and select it.
4. Click "Open".
5. The script will be installed and available in the `File > Scripts` menu in Photoshop.

### Method 3 (Recommended):

1. Place the `auto_mockup.jsx` file in the Photoshop Scripts folder:
- OS X: `/Applications/Adobe Photoshop [version]/Presets/Scripts/`
- Windows (32 bit): `C:\Program Files (x86)\Adobe\Adobe Photoshop [version]\Presets\Scripts\`
- Windows (64 bit): `C:\Program Files\Adobe\Adobe Photoshop [version] (64 Bit)\Presets\Scripts\`

After installing the script using any of these methods, you can access it by going to `File > Scripts` in Photoshop.

![image](https://user-images.githubusercontent.com/109564316/230352280-50e83b18-c67b-43bb-91e0-080c95ab9d11.png)


## Usage

1. Open Photoshop.
2. Go to `File > Scripts > auto_mockup`.

![image](https://user-images.githubusercontent.com/109564316/230352512-7624cd6f-9f37-4267-86a1-28272364e6f9.png)

4. A dialog window will appear. Use the "Select Input Folder" button to choose a folder containing the images you want to process.

![image](https://user-images.githubusercontent.com/109564316/230351766-d2d2c89a-86b1-490a-ab30-7925644c4fb9.png)

4. Use the "Select Output Folder" button to choose a folder where the processed images will be saved.
5. Use the "Select Mockup Folder" button to select the PSD mockup files you want to use. (Make sure that Smart Object is on Layer 1)

![image](https://user-images.githubusercontent.com/109564316/230353319-d851f2c7-3427-4b0b-9b2e-2c0edcfec0ea.png)

7. Click the "Process Images" button to start processing.
8. When processing is complete, an alert will appear.

![image](https://user-images.githubusercontent.com/109564316/230352903-5d312bcc-951c-4486-879b-f3777c1b01b4.png)



## Compatibility

The script is compatible with Adobe Photoshop CC versions. If you encounter any issues with other versions, please report them.

## Contributing

We welcome contributions to improve the script or add new features. Please feel free to fork the repository, make changes, and create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Example
To demonstrate the capabilities of the Photoshop Image Processor script, here's an example using a set of product images and a mockup:

# Input Images
Here are the product images that we want to place in the mockup:

![image](https://user-images.githubusercontent.com/109564316/230354697-a8cb2b44-9dcc-4533-b2fd-5e6ca3d2ca16.png)
![image](https://user-images.githubusercontent.com/109564316/230354757-069f25d0-3ba0-453a-9470-cd8dd8758333.png)

# Mockup
Here's the mockup that we'll use to place the product images:

[![image](https://user-images.githubusercontent.com/109564316/230355009-1972d514-5e3e-4091-9abb-faa7537912a3.png)](https://www.anthonyboyd.graphics/mockups/modern-dark-poster-mockup/)
[![image](https://user-images.githubusercontent.com/109564316/230355092-7d2e83a6-e6d8-4f25-add5-476ba1430c7d.png)](https://www.anthonyboyd.graphics/mockups/modern-poster-mockup-vol-2/)


# Output Images
After running the Photoshop Image Processor script, here are the output images that we get:
![image](https://user-images.githubusercontent.com/109564316/230355525-c669fead-92b5-4ea8-9712-f2f008867040.png)
![image](https://user-images.githubusercontent.com/109564316/230355554-f5f20586-bbb1-441e-b1c9-f1aeeadd9b38.png)
![image](https://user-images.githubusercontent.com/109564316/230355579-4060b36c-9a44-4439-8d5d-d53080802608.png)
![image](https://user-images.githubusercontent.com/109564316/230355600-6018b43b-45ea-4839-947e-81aa8ac5fe74.png)

As you can see, the script has automatically placed the product images in the mockup and saved the results in the specified output folder. This can save designers and photographers a lot of time and effort when working with multiple images and mockups.
