function doGet(e){

    // Change Spread Sheet url
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1QmM6h_7zVOqoye_AGC73DUiiykc7TKc20iMrpyCGXLc/edit#gid=0");
   
   // Sheet Name, Chnage Sheet1 to Users in Spread Sheet. Or any other name as you wish
    var sheet = ss.getSheetByName("testimonies");
     
    return getUsers(sheet); 
     
   }
   
   
   function getUsers(sheet){
     var jo = {};
     var dataArray = [];
   
   // collecting data from 2nd Row , 1st column to last row and last column
     var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
     
     for(var i = 0, l= rows.length; i<l ; i++){
       var dataRow = rows[i];
       var record = {};
       record['id'] = dataRow[0];
       record['name'] = dataRow[1];
       record['email'] = dataRow[2];
        record['phone'] = dataRow[3];
       record['testimony'] = dataRow[4];
       
       dataArray.push(record);
       
     }  
     
     jo.user = dataArray;
     
     var result = JSON.stringify(jo);
     
     return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
     
   }  