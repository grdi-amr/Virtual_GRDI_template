# Virtual GRDI-AMR2 template Web App

This is a React web application that utilizes the latest version of the Data Harmonizer base, specifically using the GRDI-AMR2 version 9.0 template. The purpose of this application is to provide a user-friendly interface for visualizing and manipulating spreadsheet data according to the GRDI-AMR2 template.

## Friendly Installation
A build version of the web app has been zipped and is available in the zipped_html directory.

To use this version, simply unzip the file Virtual_GRDI_template.zip and locate the index.html file. Follow these instructions:
 
Right-click on the zip file, and select "extract all". This will create a directory called "Virtual_GRDI_template". Open the "index.html" file by double-clicking. It will open in your web browser.

## Usage of the web app

The web app opens with the "Sample_collector_sample_ID" field only. The other fields for addition are in the sidebar on the left.
The spreadsheet starts with 20 rows, but more can be added by right-clicking on the spreadsheet.
 
For every field with controlled terms, the user has the option to click on the arrow in the cell and choose between the controlled terms, or add their own.
 
After the user has created a final spreadsheet, it can be exported using the Menu button and selecting "Export as XLS".


## Development Installation
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



## Functionality
The web app allows users to visualize a spreadsheet containing the "Samples" field. Additional columns can be added using the sidebar on the left. Once the spreadsheet is filled out, users can use the "Import" button in the menu to download the spreadsheet in XLS format. 
