// Set up input and output folders
var inputFolder = "C:\\Users\\Xuan Qi\\Desktop\\InfiniteDesigns\\Images";
var outputFolder = "C:\\Users\\Xuan Qi\\Desktop\\InfiniteDesigns\\Out";

// Create a new window
var win = new Window("dialog", "Process Images");

// Add input folder panel
var inputPanel = win.add("panel", undefined, "Input Folder");
inputPanel.alignment = "fill";
var inputFolderBtn = inputPanel.add("button", undefined, "Select Input Folder");
var inputFolderText = inputPanel.add("edittext", undefined, "");
inputFolderText.alignment = "fill";
inputFolderBtn.onClick = function() {
  inputFolder = Folder.selectDialog("Select a folder with images to process:");
  if (inputFolder) {
    inputFolderText.text = inputFolder.fsName;
  }
};

// Add output folder panel
var outputPanel = win.add("panel", undefined, "Output Folder");
outputPanel.alignment = "fill";
var outputFolderBtn = outputPanel.add("button", undefined, "Select Output Folder");
var outputFolderText = outputPanel.add("edittext", undefined, "");
outputFolderText.alignment = "fill";
outputFolderBtn.onClick = function() {
  outputFolder = Folder.selectDialog("Select a folder to save the processed images:");
  if (outputFolder) {
    outputFolderText.text = outputFolder.fsName;
  }
};

// Add mockup folder panel
var mockupPanel = win.add("panel", undefined, "Mockup Folder");
mockupPanel.alignment = "fill";
var mockupFolderBtn = mockupPanel.add("button", undefined, "Select Mockup Folder");
var mockupFolderText = mockupPanel.add("edittext", undefined, "");
mockupFolderText.alignment = "fill";
mockupFolderBtn.onClick = function() {
  mockupFiles = File.openDialog("Select the PSD mockup files:", "PSD files:*.psd;*.psdt", true);
};

// Add process button
var processBtn = win.add("button", undefined, "Process Images");
processBtn.alignment = "center";
processBtn.onClick = function() {
  if (inputFolder && outputFolder) {
    // Process images
    var imageFiles = inputFolder.getFiles(/\.(jpg|jpeg|png|gif|tiff|webp)$/i);

    for (var m = 0; m < mockupFiles.length; m++) {
        var mockup = app.open(mockupFiles[m]);
        for (var i = 0; i < imageFiles.length; i++) {
            processImage(imageFiles[i], mockupFiles[m]);
        }
        // Close the PSD mockup
        mockup.close(SaveOptions.DONOTSAVECHANGES);
    }

    // Function to process each image
    function processImage(imageFile, mockupFile) {
        // Replace the Smart Object's content with the new image
        var smartObjectLayer = mockup.layers[0]; // Adjust this if the Smart Object is not the first layer
        var idplacedLayerReplaceContents = stringIDToTypeID("placedLayerReplaceContents");
        var desc = new ActionDescriptor();
        desc.putPath(charIDToTypeID("null"), new File(imageFile));
        executeAction(idplacedLayerReplaceContents, desc, DialogModes.NO);

        // Save the processed image
        var outputFile = new File(outputFolder + "/" + mockupFile.displayName.replace(".psdt", "") + "_" + imageFile.name);
        var saveOptions = new JPEGSaveOptions();
        saveOptions.quality = 12;
        mockup.saveAs(outputFile, saveOptions, true, Extension.LOWERCASE);
    }
    alert("Processing complete.");
  } else {
    alert("Please select input and output folders.");
  }
};

// Function to process each image
function processImage(imageFile, mockup) {
  // Replace the Smart Object's content with the new image
  var smartObjectLayer = mockup.layers[0]; // Adjust this if the Smart Object is not the first layer
  var idplacedLayerReplaceContents = stringIDToTypeID("placedLayerReplaceContents");
  var desc = new ActionDescriptor();
  desc.putPath(charIDToTypeID("null"), new File(imageFile));
  executeAction(idplacedLayerReplaceContents, desc, DialogModes.NO);

  // Save the processed image
  var outputFile = new File(outputFolder + "/" + mockup.name + "_" + imageFile.name);
  var saveOptions = new JPEGSaveOptions();
  saveOptions.quality = 12;
  mockup.saveAs(outputFile, saveOptions, true, Extension.LOWERCASE);
}

// Add exit button
var exitBtn = win.add("button", undefined, "Exit");
exitBtn.alignment = "center";
exitBtn.onClick = function() {
win.close();
};

// Show the window
win.show();
