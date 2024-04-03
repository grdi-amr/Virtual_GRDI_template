# React Data Harmonizer Web App

This is a React web application that utilizes the latest version of the Data Harmonizer base, specifically using the GRDI-AMR2 version 9.0 template. The purpose of this application is to provide a user-friendly interface for visualizing and manipulating spreadsheet data according to the GRDI-AMR2 template.

## Installation

To get started with this project, you'll need to have Node.js and npm installed on your machine. Once you have those installed, you can follow these steps:

1. Clone this repository to your local machine:

```
git clone https://github.com/ComputationalPathogens/Virtual_GRDI_template.git
```

2. Navigate into the project directory:

```
cd Virtual_GRDI_template
```


3. Install the required dependencies using npm:
```
npm install
```

## Usage
After installing the dependencies, you can run the development server using the following command:

```
npm start
```

This will start the development server, and you can view the web app by navigating to http://localhost:3000 in your web browser.

## Building for Production
To build the application for production, you can use the following command:

```
npm run build
```

This will create a production-ready build of the application in the build directory.

##Zipped HTML Version
Additionally, a build version of the web app has been zipped and is available in the zipped_html directory. To use this version, simply unzip the contents and locate the index.html file. You can then open this file in any web browser by double-clicking on it.

## Functionality
The web app allows users to visualize a spreadsheet containing the "Samples" field. Additional columns can be added using the sidebar on the left. Once the spreadsheet is filled out, users can use the "Import" button in the menu to download the spreadsheet in XLS format. The GRD-AMR2 template used as background is the 9.0.0. Keep an eye for updates.

