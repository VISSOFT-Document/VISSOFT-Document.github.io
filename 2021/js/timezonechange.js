function printTimeScope(isShowDate, h1, m1, h2, m2, wd, mon, day)
    {
       var pre = false, next = false;
       var oh1, om1, oh2, om2, owd=wd, omon=mon, oday=day;
       var soh1,som1,soh2,som2, sowd,somon,soday;
       if( h1 < 0) { oh1 = h1 + 24; owd = owd - 1; oday = oday - 1; pre = true;}
       else if( h1 >= 24) { oh1 = h1 - 24; owd = owd + 1; oday = oday + 1; next = true;}
       else { oh1 = h1;}
       if(oh1<10) {soh1='0'+oh1;}
       else {soh1=''+oh1;}
       if(oday <= 0) { oday = oday + 30; omon = omon - 1;}
       if(oday > 30) { oday = oday - 30; omon = omon + 1;}

       if( m1 <0 ) { om1 = m1 + 60; oh1 = oh1 -1;}
       else if( m1 >= 60) { om1 = m1 - 60; oh1 = oh1 + 1;}
       else { om1 = m1;}
       if(om1<10) {som1='0'+om1;}
       else {som1=''+om1;}

       if( h2 < 0) { oh2 = h2 + 24;}
       else if( h2 >= 24) { oh2 = h2 - 24;}
       else { oh2 = h2;}
       if(oh2<10) {soh2='0'+oh2;}
       else {soh2=''+oh2;}

       if( m2 <0 ) { om2 = m2 + 60; oh2 = oh2 - 1;}
       else if( m2 >= 60) { om2 = m2 - 60; oh2 = oh2 +1;}
       else { om2=m2;}

       var WeekDayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
       var MonthArray = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

       if(oh1<10) {soh1='0'+oh1;}
       else {soh1=''+oh1;}
       if(om1<10) {som1='0'+om1;}
       else {som1=''+om1;}
       if(oh2<10) {soh2='0'+oh2;}
       else {soh2=''+oh2;}
       if(om2<10) {som2='0'+om2;}
       else {som2=''+om2;}

       if(isShowDate == false)
       {
          var sotmp = ''+soh1 +':'+som1+' - '+soh2+':'+som2;
          if(pre) { return sotmp + ' (Previous Day)'; }
          if(next) {return sotmp + ' (Next Day)'; }
          return sotmp;
       }
       else
       {
          sowd = WeekDayArray[owd-1];
          somon = MonthArray[omon-1];
          return ''+soh1 +':'+som1+' - '+soh2+':'+som2+', '+sowd+', '+somon+' '+oday;
       }
    }

function changeTimeZone()
    {
      var radioVal = $("input[name='7f1c530082a1648d7f4d99b4d59acfb5']:checked").val();
      var isNotUTC = (radioVal == 'true');
      var timeZone = "(UTC) Coordinated Universal Time";
      var tz2 = ["00","00"];
      if(isNotUTC)
      {
      var options=$('#4f313ae9a1caf4791433d8edc07c6dad option:selected');
      timeZone = options.text();
      var reg = /[+-]\d\d:\d\d/;
      var tztext = timeZone.match(reg);
        if(tztext)
        {
         var tz1 = timeZone.match(reg)[0];
         tz2 = tz1.split(':');
        }
      }
      var hour = parseInt(tz2[0]), min = parseInt(tz2[1]);
      $('#UTCTimeZone1').text(timeZone);
      $('#UTCTimeZone2').text(timeZone);
      var utcElements = $('[id^="UTC-"]');  
      for(var j = 0,len=utcElements.length; j < len; j++) {
           var ele = utcElements[j];
           var id = ele.id;
           var tmp = id.split('-');
           var h1 = parseInt(tmp[1]),m1 = parseInt(tmp[2]),h2 = parseInt(tmp[3]), m2 = parseInt(tmp[4]);
           var output = printTimeScope(false, h1+hour, m1+min, h2+hour, m2+min,0,0,0);
           ele.innerHTML = output;
             
       }
     
    }