PennController.ResetPrefix( null );
AddHost("https://amor.cms.hu-berlin.de/~idslfahm/ibex_bilder/PWI_BB/");
PennController.InitiateRecorder( "https://amor.cms.hu-berlin.de/~idslfahm/recordings/Recording.php").label( "init" );
//PennController.DebugOff()




PennController.Sequence("init", "intro", "PersonalData", "hinweise", "familiarization_start", "familiarization", "test", "practice_start", "practice", "main_start",   sepWithN("break", "main", 4)   ,  "send", "end")




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Introduction HTML


PennController("intro",

             newHtml("intro", "example_intro.html")
             .print()

             ,

             newCanvas("space1", 1, 125)
             .print()

             ,

             newButton("weiter", "weiter")
             .center()
             .print()
             .wait()


    )

    .setOption("hideProgressBar", "true")
    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Clickworker ID


PennController("PersonalData",



               newText("EnterData", "Zun&auml;chst ein paar Angaben zu deiner Person!")
               .settings.css("font-size", "large")
               .print()

               ,

               newCanvas("space1", 1, 10)
               .print()

               ,

               newText("EnterData2", "<b>Du musst erst alle Angaben machen, bevor du auf <i>weiter</i> klickst, da das Experiment sonst abgebrochen wird!</b>")
               .settings.css("font-size", "18px")
               .print()

               ,

               newCanvas("space2", 1, 10)
               .print()

               ,

               newTextInput("ID", "")
               .settings.log()

               ,

               newText("IDtext", "Clickworker ID:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("IDcanvas", 600, 45)
               .add(0, 20, getText("IDtext"))
               .add(200, 23, getTextInput("ID"))
               .print()

               ,

               newDropDown("language", "")
               .settings.log("last")
               .add( "Deutsch" , "Deutsch und andere Sprache(n) vor dem 5.Lebensjahr" , "andere" )

               ,

               newText("languagetext", "Muttersprache:")
               .settings.css("font-size", "18px")

               ,


               newCanvas("languagecanvas", 600, 35)
               .add(0, 20, getText("languagetext"))
               .add(200, 23, getDropDown("language"))
               .print()

               ,

               newDropDown("gender", "")
               .settings.log("last")
               .add( "weiblich" , "m&auml;nnlich" , "divers" )

               ,

               newText("gendertext", "Geschlecht:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("gendercanvas", 600, 35)
               .add(0, 20, getText("gendertext"))
               .add(200, 23, getDropDown("gender"))
               .print()

               ,


               newDropDown("age", "")
               .settings.log("last")
               .add( "17 oder j&uuml;nger" , "18" , "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33 oder &auml;lter" )

               ,

               newText("agetext", "Alter:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("agecanvas", 600, 35)
               .add(0, 20, getText("agetext"))
               .add(200, 23, getDropDown("age"))
               .print()

               ,

               newDropDown("browser", "")
               .settings.log("last")
               .add( "Safari" , "Firefox" , "Chrome", "Internet Explorer", "Microsoft Edge", "anderer" )

               ,

               newText("browsertext", "Verwendeter Browser:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("browsercanvas", 600, 35)
               .add(0, 20, getText("browsertext"))
               .add(200, 23, getDropDown("browser"))
               .print()

               ,

               newCanvas("space3", 1, 155)
               .print()

               ,

               newButton("weiter", "weiter")
               .settings.center()
               .print()
               .wait(getDropDown("age")
                     .test.selected("18")
                     .or( getDropDown("age")
                        .test.selected("19")
                        .or( getDropDown("age")
                           .test.selected("20")
                           .or( getDropDown("age")
                             .test.selected("21")
                             .or( getDropDown("age")
                               .test.selected("22")
                               .or( getDropDown("age")
                                 .test.selected("23")
                                 .or( getDropDown("age")
                                   .test.selected("24")
                                   .or( getDropDown("age")
                                     .test.selected("25")
                                     .or( getDropDown("age")
                                       .test.selected("26")
                                       .or( getDropDown("age")
                                         .test.selected("27")
                                         .or( getDropDown("age")
                                           .test.selected("28")
                                           .or( getDropDown("age")
                                            .test.selected("29")
                                            .or( getDropDown("age")
                                              .test.selected("30")
                                              .or( getDropDown("age")
                                                .test.selected("31")
                                                .or( getDropDown("age")
                                                  .test.selected("32")
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )// ende age scale


                     .and(getDropDown("language")
                       .test.selected("Deutsch")
                       .or(getDropDown("language")
                         .test.selected("Deutsch und andere Sprache(n) vor dem 5.Lebensjahr")

                          )
                          ) //ende language scale

                     .and(getDropDown("gender")
                       .test.selected("m&auml;nnlich")
                       .or(getDropDown("gender")
                         .test.selected("weiblich")
                         .or(getDropDown("gender")
                           .test.selected("divers")
                          )
                          )
                          ) //ende gender scale

                      .and(getDropDown("browser")
                        .test.selected("Safari")
                        .or(getDropDown("browser")
                          .test.selected("Firefox")
                          .or(getDropDown("browser")
                            .test.selected("Chrome")
                            .or(getDropDown("browser")
                              .test.selected("Internet Explorer")
                              .or(getDropDown("browser")
                                .test.selected("Microsoft Edge")
                                .or(getDropDown("browser")
                                  .test.selected("anderer")
                           )
                           )
                           )
                           )
                           )
                           ) //ende browser scale


                      .and(getTextInput("ID")
                        .test.text(/^\d+$/)
                           )



                     .success()
                     .failure(

                         getButton("weiter")
                         .remove()
                         ,
                         newText("bye", "Du kannst leider nicht an dem Experiment teilnehmen, da deine Angaben nicht mit denen bei Clickworker &uuml;bereinstimmen oder du nicht alle Angaben eingegeben hast.")
                         .color("red")
                         .print()

                             ) //ende failure

                    ) // ende wait

               ,

               newVar("ID")
               .settings.global()
               .set( getTextInput("ID") )

               ,

               newVar("gender")
               .settings.global()
               .set( getDropDown("gender") )

               ,

               newVar("age")
               .settings.global()
               .set( getDropDown("age") )

               ,

               newVar("language")
               .settings.global()
               .set( getDropDown("language") )

               ,

               newVar("browser")
               .settings.global()
               .set( getDropDown("browser") )

     )

    .setOption("hideProgressBar", "true")
    .log( "ID" ,       getVar("ID"))
    .log( "gender" ,   getVar("gender"))
    .log( "age" ,      getVar("age"))
    .log( "language" , getVar("language"))
    .log( "browser" ,  getVar("browser"))


    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Hinweise HTML

PennController("hinweise",

             newHtml("Hinweise_html.html")
             .print()

             ,

             newCanvas("space1", 1, 160)
             .print()

             ,

             newButton("weiter", "weiter")
             .center()
             .print()
             .wait()


    )

    .setOption("hideProgressBar", "true")
    ;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Familiarization_Start


PennController("familiarization_start",

              newText("familiarization_instr1", "Zun&auml;chst zeigen wir dir alle Bilder, die sp&auml;ter in dem Experiment vorkommen. Dabei erscheinen mehrere Bilder gleichzeitig auf dem Bildschirm. Unter jedem einzelnen Bild wird der Begriff stehen, mit dem du das Bild sp&auml;ter benennen sollst (z.B. &quot;Frosch&quot;, wenn das Bild einen Frosch zeigt). Betrachte die Bilder deshalb bitte aufmerksam und versuche dir die dazugeh&ouml;rigen Begriffe zu merken!")
              .settings.css("font-size", "18px")

              ,

              newText("familiarization_instr2", "Nachdem du alle Bilder gesehen hast, wird es eine kurze Abfrage der Bilder geben, um zu &uuml;berpr&uuml;fen " )
              .settings.css("font-size", "18px")
              .settings.bold()

              ,

              newText("familiarization_instr3", "Unter den Bildern erscheint nach einiger Zeit der <i>weiter</i>-Knopf, mit dem du dich durch die Bilder klicken kannst. " )
              .settings.css("font-size", "18px")

              ,

              newText("familiarization_instr4", "Klicke <i>weiter</i>, um zu beginnen!")
              .settings.css("font-size", "18px")

              ,

              newCanvas("text_fam", 900, 400)
              .add( 60,   0, getText("familiarization_instr1"))
              .add( 60, 100, getText("familiarization_instr2"))
              .add( 60, 140, getText("familiarization_instr3"))
              .add(300, 220, getText("familiarization_instr4"))
              .print()

              ,

              newButton("weiter", "weiter")
              .center()
              .print()
              .wait()


    )

   .setOption("hideProgressBar", "true")

    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Familiarization


PennController.Template("Familiarization_PWI.csv", variable =>

              PennController("familiarization",


              newCanvas("Row1", 800, 175)
              .add (75,   0, newImage( "Bild1", variable.Bild1).size(150,150))
              .add(125, 155, newText ( "Wort1", variable.Wort1).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              .add(325,   0, newImage( "Bild2", variable.Bild2).size(150,150))
              .add(375, 155, newText ( "Wort2", variable.Wort2).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              .add(575,   0, newImage( "Bild3", variable.Bild3).size(150,150))
              .add(625, 155, newText ( "Wort3", variable.Wort3).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              .print()

              ,

              newCanvas("space1", 1, 25)
              .print()

              ,

              newCanvas("Row2", 800, 175)
              .add( 75,   0, newImage("Bild4", variable.Bild4).size(150,150))
              .add(125, 155, newText ("Wort4", variable.Wort4).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              .add(325,   0, newImage("Bild5", variable.Bild5).size(150,150))
              .add(375, 155, newText ("Wort5", variable.Wort5).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              .add(575,   0, newImage("Bild6", variable.Bild6).size(150,150))
              .add(625, 155, newText ("Wort6", variable.Wort6).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              .print()

              ,

              newTimer("presentpic", 7000)
              .start()
              .wait()

              ,

              newCanvas("space2", 1, 25)
              .print()

              ,

              newButton("weiter", "weiter")
              .center()
              .print()
              .wait()


    )


    .setOption("hideProgressBar", "true")
    .log( "Bild1"       , variable.Bild1 )     //die logs braucht man eigentlich nur, wenn Reihenfolge bzw. Anordnung zwischen den Probanden variiert
    .log( "Wort1"       , variable.Wort1 )
    .log( "Bild2"       , variable.Bild2 )
    .log( "Wort2"       , variable.Wort2 )
    .log( "Bild3"       , variable.Bild3 )
    .log( "Wort3"       , variable.Wort3 )
    .log( "Bild4"       , variable.Bild4 )
    .log( "Wort4"       , variable.Wort4 )
    .log( "Bild5"       , variable.Bild5 )
    .log( "Wort5"       , variable.Wort5 )
    .log( "Bild6"       , variable.Bild6 )
    .log( "Wort6"       , variable.Wort6 )
    .log( "Farbe"       , variable.Farbe )
    .log( "ID"          , getVar("ID")      )
    .log( "gender"      , getVar("gender")  )
    .log( "age"         , getVar("age")     )
    .log( "language"    , getVar("language"))
    .log( "browser"     , getVar("browser") )

   )
   ;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Test_familiarization

PennController("test",


              newText("Bitte w&auml;hle f&uuml;r alle Objekte aus, ob sie vorkamen (&quot;ja&quot;) oder nicht (&quot;nein&quot;)")
              .settings.css("font-size", "18px")
              .print()

              ,

              newCanvas("space1", 1, 10)
              .print()

              ,

              newText("<b>Du musst erst alle Angaben machen, bevor du auf <i>weiter</i> klickst, da das Experiment sonst abgebrochen wird!</b>")
              .settings.css("font-size", "18px")
              .print()

              ,

              newCanvas("space2", 1, 20)
              .print()

              ,

              newScale("Zunge","ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("zungecanvas", 800, 40)
              .add(300, 10, newText("zungetext", "Zunge:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Zunge"))
              .print()

              ,

              newScale("Frosch","ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("froschcanvas", 800, 40)
              .add(300, 10, newText("froschtext", "Frosch:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Frosch"))
              .print()

              ,

              newScale("Nest","ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("nestcanvas", 800, 40)
              .add(300, 10, newText("nesttext", "Nest:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Nest"))
              .print()

              ,

              newScale("Reifen","ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("reifencanvas", 800, 40)
              .add(300, 10, newText("reifentext", "Reifen:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Reifen"))
              .print()

              ,

              newScale("Kette", "ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("kettecanvas", 800, 40)
              .add(300, 10, newText("kettetext", "Kette:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Kette"))
              .print()

              ,

              newScale("Gespenst", "ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("gespenstcanvas", 800, 40)
              .add(300, 10, newText("gespensttext", "Gespenst:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Gespenst"))
              .print()

              ,

              newCanvas("space", 1, 90)
              .print()

              ,

              newButton("weiter", "weiter")
               .settings.center()
               .print()
               .wait( getScale("Zunge")
                      .test.selected("nein")
                        .or(getScale("Zunge")
                        .test.selected("ja")
                     )
                      .and( getScale("Frosch")
                            .test.selected("nein")
                              .or(getScale("Frosch")
                              .test.selected("ja")
                              ))
                      .and( getScale("Nest")
                            .test.selected("nein")
                              .or(getScale("Nest")
                              .test.selected("ja")
                              ))
                      .and( getScale("Reifen")
                            .test.selected("nein")
                              .or(getScale("Reifen")
                              .test.selected("ja")
                              ))
                      .and( getScale("Kette")
                            .test.selected("nein")
                              .or(getScale("Kette")
                              .test.selected("ja")
                              ))
                      .and( getScale("Gespenst")
                            .test.selected("nein")
                              .or(getScale("Gespenst")
                              .test.selected("ja")
                              ))


                     .success() //continue as normal
                     .failure(  // otherwise, remove all canvases and display the "bye" text
                         getButton("weiter")
                         .remove()
                         ,
                         newText("bye", "Da du nicht  f&uuml;r alle Objekte eine Angabe gemacht hast, kannst du leider nicht an der Studie teilnehmen.")
                         .color("red")
                         .print()

                              ) // ende failure

                    ) //ende wait

             ) // ende penncontroller

    .setOption("hideProgressBar", "true")
    .log( "ID"       , getVar("ID")      )
    .log( "gender"   , getVar("gender")  )
    .log( "age"      , getVar("age")     )
    .log( "language" , getVar("language"))
    .log( "browser"  , getVar("browser") )

    ;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Practice


PennController("practice_start",

              /*newText("practice_instr1", "Es folgt jetzt eine kurze &Uuml;bung, damit du dich mit dem Ablauf des Experiments vertraut machen kannst!")
              .settings.css("font-size", "18px")

              ,

              newText("practice_instr2", "Dir werden immer Paare aus zwei Bildern pr&auml;sentiert, die kurz nacheinander auf dem Bildschirm erscheinen.")
              .settings.css("font-size", "18px")

              ,

              newText("practice_instr3", "Deine Aufgabe ist es, beide Bilder zusammen mit ihrer Farbe zu benennen. Wenn du z.B. das Bild der Erbse siehst, sollst du sagen &quot;Die Erbse ist gr&uuml;n&quot;. Wie eben werden die Bilder immer in der entsprechenden Farbe eingef&auml;rbt sein.")
              .settings.css("font-size", "18px")

              ,

              newText("practice_instr4","Auf einigen der Bildern werden zust&auml;zlich Worte stehen. Diese sollst du bei der Benennung ignorieren.")
              .settings.css("font-size", "18px")

              ,

              newText("practice_instr5","Um zum n&auml;chsten Bildpaar zu gelangen, musst du die Leertaste dr&uuml;cken. Du kannst dich weiterklicken, sobald die Aufnahme f&uuml;r das zweite Bild stoppt. Es wird dann zun&auml;chst ein kleines Kreuz in der Mitte des Bildschirms erscheinen, bevor das n&auml;chste Paar gezeigt wird.")
              .settings.css("font-size", "18px")

              ,

              newText("practice_instr5","Bitte benenne die Bilder so korrekt und schnell wie m&oumlglich!")
              .settings.css("font-size", "18")

              ,

              newText("practice_instr6", "Klicke <i>weiter</i>, um zu beginnen!")
              .settings.css("font-size", "18px")

              ,

              newCanvas("background", 900, 400)
              .add( 60,    0, getText("practice_instr1"))
              .add( 60,   30, getText("practice_instr2"))
              .add( 60,   60, getText("practice_instr3"))
              .add( 60,  120, getText("practice_instr4"))
              .add( 60,  150, getText("practice_instr5"))
              .add(300,  240, getText("practice_instr6"))
              .print()

              ,*/

              newHtml("practice_start", "practice_start.html")
              .print()
              ,

              newButton("weiter", "weiter")
              .settings.center()
              .print()
              .wait()


    )

    .setOption("hideProgressBar", "true")

    ;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Practice


PennController.Template("uebung_v2.csv", variable =>

    PennController("practice",

             newText("Distractor" , variable.distractor)
             .settings.bold()

             ,

             newImage("SetupPic", variable.setup_pic)
             .size(300, 300)

             ,

             newImage("TargetPic", variable.target_pic)
             .size(300, 300)

             ,

             newCanvas("FixationCanvas", 300, 300)
             .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
             .print()

             ,

             newTimer("ShowFixation", 1000)
             .start()
             .wait()

             ,

             getText("fixation")
             .remove()

             ,

             newTimer("ShowBlank", 500)
             .start()
             .wait()

             ,

             getCanvas("FixationCanvas")
             .remove()

             ,

             newCanvas("SetupCanvas", 300, 300)
             .add(0, 0, getImage("SetupPic"))
             .print()

             ,

             newVoiceRecorder("SetupRecorder")
             .record()

             ,

             newTimer("ShowSetup", 1000) // Bild wird 1000 ms gezeigt
             .start()
             .wait()

             ,

             getCanvas("SetupCanvas")
             .remove()

             ,

             newTimer("RecordSetup", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
             .start()
             .wait()

             ,

             getVoiceRecorder("SetupRecorder")
             .stop()

             ,

             newTimer("Intertrial", 750)
             .start()
             .wait()

             ,

             newCanvas("TargetCanvas", 300, 300)
             .add(0, 0, getImage("TargetPic"))
             .add(110, 140, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman")) // SOA = 0ms --> Uebung fuer jeweilige SOA anpassen?
             .print()


             ,

             newVoiceRecorder("TargetRecorder")
             .record()

             ,

             newTimer("ShowTarget", 1000) // Bild wird 1000 ms gezeigt
             .start()
             .wait()

             ,

             getCanvas("TargetCanvas")
             .hidden()

             ,

             newTimer("RecordTarget", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
             .start()
             .wait()

             ,

             getVoiceRecorder("TargetRecorder")
             .stop()

             ,

             newCanvas("space1", 1, 100)
             .print()

             ,

             newButton("weiter", "weiter")

             ,

             newSelector("button")
             .add(getButton("weiter") )
             .settings.keys(     " "                   )
             .wait()

    )

    .setOption("hideProgressBar", "true" )
    .log( "ID"                   , getVar("ID")             )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    .log( "browser"              , getVar("browser")        )
    .log( "SetupObject"          , getVar("setup_pic")      )
    .log( "TargetObject"         , getVar("target_pic")     )
    .log( "Distractor"           , getVar("distractor")     )
    .log( "SetupColor"           , variable.setup_col       )
    .log( "TargetColor"          , variable.target_col      )
    .log( "DistractorCondition"  , variable.distractor_cond )
    .log( "FocusCondition"       , variable.focus_cond      )
    .log( "Condition"            , variable.condition       )
    .log( "Itempaar"             , variable.itempaar        )
    )
    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Main

PennController("main_start",

              newText("main_instr1", "Jetzt beginnt das eigentliche Experiment!")
              .settings.css("font-size", "18px")
              .settings.bold()

              ,

              newText("main_instr2", "Der Ablauf ist der gleiche wie gerade in der &Uuml;bung.")
              .settings.css("font-size", "18px")

              ,

              newText("main_instr3", "Es wird zwischendurch drei kurze Pausen geben.")
              .settings.css("font-size", "18px")

              ,

              newText("main_instr4", "Klicke <i>weiter</i>, um zu beginnen!")
              .settings.css("font-size", "18px")

              ,

              newCanvas("background", 900, 400)
              .add(300,    0, getText("main_instr1"))
              .add(300,   30, getText("main_instr2"))
              .add(300,   60, getText("main_instr3"))
              .add(340,  220, getText("main_instr4"))
              .print()

              ,

              newButton("weiter", "weiter")
              .settings.center()
              .print()
              .wait()


    )

    .setOption("hideProgressBar", "true")

    ;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Main

PennController.Template("uebung_v2.csv", variable =>

    PennController("main",

             newText("Distractor" , variable.distractor)
             .settings.bold()

             ,

             newImage("SetupPic", variable.setup_pic)
             .size(300, 300)

             ,

             newImage("TargetPic", variable.target_pic)
             .size(300, 300)

             ,

             newCanvas("FixationCanvas", 300, 300)
             .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
             .print()

             ,

             newTimer("ShowFixation", 1000)
             .start()
             .wait()

             ,

             getText("fixation")
             .remove()

             ,

             newTimer("ShowBlank", 500)
             .start()
             .wait()

             ,

             getCanvas("FixationCanvas")
             .remove()

             ,

             newCanvas("SetupCanvas", 300, 300)
             .add(0, 0, getImage("SetupPic"))
             .print()

             ,

             newVoiceRecorder("SetupRecorder")
             .record()

             ,

             newTimer("ShowSetup", 1000) // Bild wird 1000 ms gezeigt
             .start()
             .wait()

             ,

             getCanvas("SetupCanvas")
             .remove()

             ,

             newTimer("RecordSetup", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
             .start()
             .wait()

             ,

             getVoiceRecorder("SetupRecorder")
             .stop()

             ,

             newTimer("Intertrial", 750)
             .start()
             .wait()

             ,

             newCanvas("TargetCanvas", 300, 300)
             .add(0, 0, getImage("TargetPic"))
             .add(110, 140, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman")) // SOA = 0ms --> Uebung fuer jeweilige SOA anpassen?
             .print()


             ,

             newVoiceRecorder("TargetRecorder")
             .record()

             ,

             newTimer("ShowTarget", 1000) // Bild wird 1000 ms gezeigt
             .start()
             .wait()

             ,

             getCanvas("TargetCanvas")
             .hidden()

             ,

             newTimer("RecordTarget", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
             .start()
             .wait()

             ,

             getVoiceRecorder("TargetRecorder")
             .stop()

             ,

             newCanvas("space1", 1, 100)
             .print()

             ,

             newButton("weiter", "weiter")

             ,

             newSelector("button")
             .add(getButton("weiter") )
             .settings.keys(     " "                   )
             .wait()

    )

    .setOption("hideProgressBar", "true" )
    .log( "ID"                   , getVar("ID")             )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    .log( "browser"              , getVar("browser")        )
    .log( "SetupObject"          , getVar("setup_pic")      )
    .log( "TargetObject"         , getVar("target_pic")     )
    .log( "Distractor"           , getVar("distractor")     )
    .log( "SetupColor"           , variable.setup_col       )
    .log( "TargetColor"          , variable.target_col      )
    .log( "DistractorCondition"  , variable.distractor_cond )
    .log( "FocusCondition"       , variable.focus_cond      )
    .log( "Condition"            , variable.condition       )
    .log( "Itempaar"             , variable.itempaar        )
    )
    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Break

PennController("break",


              newCanvas("breakcanvas", 800, 400)
              .add(250,50, newText("pleasewait1", "Eine kurze Pause zur Erholung!").settings.css("font-size", "large"))
              .add(250,100, newText("pleasewait2", "Sobald du fortfahren kannst, erscheint unten der <i>weiter</i>-Knopf.").settings.css("font-size", "18px"))
              .print()


              ,

              newTimer("break", 10000)
              .start()
              .wait()

              ,

              getCanvas("breakcanvas")
              .remove()

              ,

              newCanvas("breakendcanvas", 800, 400)
              .add(215, 50, newText("continue", "Du kannst das Experiment jetzt fortsetzen.") .settings.css("font-size", "18px"))
              .print()

              ,

              newButton("weiter", "weiter")
              .center()
              .print()
              .wait()

    )

   .setOption("hideProgressBar", "true")
;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// completion screen

PennController.SendResults("send");

PennController("end",

    newText("<p>Vielen Dank f&uuml;r deine Teilnahme!</p>")
    .settings.css("font-size", "large")
    .print()

     ,

    newCanvas("empty6", 1, 10)
    .print()

    ,

    newText("Code",  "Wichtiger Hinweis:  <br /> Bitte kopiere den folgenden Code und f&uuml;ge ihn in das daf&uuml;r vorgesehene Feld innerhalb deines Clickworker-Aufgabenformulars ein. <br /> Ohne die Eingabe dieses Codes kann eine Gutschrift deines Honorars nicht erfolgen!")
    .settings.css("font-size", "large")
    .print()

    ,

     newCanvas("empty7", 1, 5)
    .print()

    ,

    newText("Code2", "<b> Code: PWIBB </b>")
    .settings.css("font-size", "large")
    .print()

    ,


    newButton("void")
     .wait()

)

    .setOption("hideProgressBar", "true")
