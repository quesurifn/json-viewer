import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DiffChecker from './components/DiffChecker'
import ViewerAndEditor from './components/ViewerAndEditor';

import Logo from './logo.png'
import './App.css';
import "react-tabs/style/react-tabs.css";


function App() {
  return (
    <React.Fragment>
      <header>
        <img height="35px" src={Logo} alt="jsonviewer.dev's logo" />
      </header>
       <main className="container">
        <Tabs>
          <TabList>
          <Tab>JSON Viewer</Tab>
          <Tab>JSON Differ</Tab>
          </TabList>

          <TabPanel>
            <ViewerAndEditor />
          </TabPanel>
            
          <TabPanel>
            <DiffChecker />
          </TabPanel>
        </Tabs>
      </main>
      <section className="container" style={{backgroundColor: "#d3d3d3"}}>
        <h2>Why</h2>
        <hr  />
        <p>
          JSON is tough to work with. After working a few hours staring at your screen, viewing JSON in a manner that makes sense becomes more and more difficult. 
          Spaces start looking like tabs and braces start looking like brackets. jsonviewer.dev was made to easily understand your JSON in a tree-like format complete with data types, validate it with the built-in editor, and diff it with a setup that's easier on the eyes than Github's.
        </p>
      </section>
      <section className="container">
        <h2>Reference</h2>
        <hr  />
        <p>JavaScript Object Notation (JSON, pronounced Jason") is an open-standard file format that uses human-readable text to transmit key / value pair objects. JSON is a language-independent data format. It was originally derived from Javascript but most modern languages include methods to parse JSON into a native key/value data store. JSON uses the .json file extension.
        Douglas Crockford originally defined the JSON format in the early 2000s and later was standardized by <a href="https://tools.ietf.org/html/rfc7158">RFC 7158</a> and <a href="https://www.ecma-international.org/publications/standards/Ecma-404.htm">ECMA-404</a></p>
      </section>
      <section className="container" style={{backgroundColor: "#d3d3d3"}}>
        <h2>Learn More About JSON</h2>
        <hr  />
        <iframe title="Free Code Camp Youtube, learn more about JSON" width="560" height="315" src="https://www.youtube-nocookie.com/embed/GpOO5iKzOmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <small style={{margin: "20px 0", textAlign: "center", display: "block"}}>*The original site about json can be found <a href="https://json.org">here</a></small>
    </section>
    <section className="container" >
    <div className="row">
      <div className="col-md-12">
        <h2>JSON in Other languages</h2>
        <hr />
      </div>
      <div className="col-md-3">
            <ul>
                <li>Nim:
                    <ul>
                        <li><a href="https://nim-lang.org/docs/json.html">Module json</a>.</li>
                    </ul>
                </li>
                <li>Objective C:
                    <ul>
                        <li><a href="https://developer.apple.com/library/ios/documentation/foundation/reference/nsjsonserialization_class/Reference/Reference.html">NSJSONSerialization</a>.</li>
                        <li><a href="https://github.com/stig/json-framework/">json-framework</a>.</li>
                        <li><a href="https://github.com/johnezang/JSONKit">JSONKit</a>.</li>
                        <li><a href="https://github.com/gabriel/yajl-objc">yajl-objc</a>.</li>
                        <li><a href="https://github.com/TouchCode/TouchJSON">TouchJSON</a>.</li>
                    </ul>
                </li>
                <li>OCaml:
                    <ul>
                        <li><a href="http://erratique.ch/software/jsonm">jsonm</a>.</li>
                    </ul>
                </li>
                <li>PascalScript:
                    <ul>
                        <li><a href="https://github.com/koldev/JsonParser">JsonParser</a>.</li>
                    </ul>
                </li>
                <li>Perl:
                    <ul>
                        <li><a href="http://search.cpan.org/search?query=JSON">CPAN</a>.</li>
                    </ul>
                </li>
                <li>Photoshop:
                    <ul>
                        <li><a href="http://www.tonton-pixel.com/blog/json-photoshop-scripting/">JSON Photoshop Scripting</a>.</li>
                    </ul>
                </li>
    
                <li>Visual FoxPro:
                    <ul>
                        <li><a href="http://www.foxweb.com/document/index.htm?page=/document/fwJSONObject.htm">fwJSON</a>.</li>
                        <li><a href="http://www.sweetpotatosoftware.com/SPSBlog/PermaLink,guid,5f96efd7-f350-4bc8-86c5-caffd9e833eb.aspx">JSON</a>.</li>
                        <li><a href="https://github.com/sait/vfpjson">vfpjson</a>.</li>
                    </ul>
                </li>
            </ul>
    
        </div>
        <div className="col-md-3">
            <ul>
                <li>Ruby:
                    <ul>
                        <li><a href="http://github.com/brianmario/yajl-ruby">yajl-ruby</a>.</li>
                        <li><a href="https://github.com/dgraham/json-stream">json-stream</a>.</li>
                        <li><a href="https://repo.progsbase.com/repoviewer/no.inductive.idea10.programs/JSON/latest">progbase</a>.</li>
                    </ul>
                </li>
                <li>Scheme:
                    <ul>
                        <li><a href="http://www.lshift.net/blog/2005/08/22/json-for-mzscheme-and-a-portable-packrat-parsing-combinator-library">MZScheme</a>.</li>
                        <li><a href="http://planet.plt-scheme.org/display.ss?package=json.plt&amp;owner=dherman">PLT Scheme</a>.</li>
                    </ul>
                </li>
                <li>Shell:
                    <ul>
                        <li><a href="http://kmkeen.com/jshon/">Jshon</a>.</li>
                        <li><a href="https://github.com/dominictarr/JSON.sh">JSON.sh</a>.</li>
                        <li><a href="https://github.com/shellbound/jwalk/">jwalk</a>.</li>
                    </ul>
                </li>
                <li>Squeak:
                    <ul>
                        <li><a href="http://map1.squeakfoundation.org/sm/package/d38bdc2d-e52a-4167-ae73-2cf438c65c2f">Squeak</a>.</li>
                    </ul>
                </li>
                <li>Tcl:
                    <ul>
                        <li><a href="http://wiki.tcl.tk/13419">JSON</a>.</li>
                    </ul>
                </li>
                <li>Visual Basic:
                    <ul>
                        <li><a href="http://www.ediy.co.nz/vbjson-json-parser-library-in-vb6-xidc55680.html">VB-JSON</a>.</li>
                        <li><a href="http://www.pozzware.com/pozzware/Corsi/Programmazione/VB.NET/JSON%20Library.aspx">PW.JSON</a>.</li>
                        <li><a href="https://github.com/dday9/.NET-JSON-Transformer">.NET-JSON-Transformer</a>.</li>
                        <li><a href="https://repo.progsbase.com/repoviewer/no.inductive.idea10.programs/JSON/latest">progbase</a>.</li>
    
                    </ul>
                </li>
          </ul>
    
        </div>
        <div className="col-md-3">
            <ul>
                <li>Puredata:
                    <ul>
                        <li><a href="https://github.com/residuum/PuRestJson">PuRestJson</a>.</li>
                    </ul>
                </li>
                <li>Python:
                    <ul>
                        <li><a href="http://docs.python.org/library/json.html">The Python Standard Library</a>.</li>
                        <li><a href="http://pypi.python.org/pypi/simplejson/">simplejson</a>.</li>
                        <li><a href="http://jyson.xhaus.com/">pyson</a>.</li>
                        <li><a href="http://pykler.github.com/yajl-py/">Yajl-Py</a>.</li>
                        <li><a href="https://github.com/esnme/ultrajson">ultrajson</a>.</li>
                        <li><a href="http://pypi.python.org/pypi/metamagic.json/">metamagic.json</a>.</li>
                        <li><a href="https://repo.progsbase.com/repoviewer/no.inductive.idea10.programs/JSON/latest">progbase</a>.</li>
                    </ul>
                </li>
                <li>R:
                    <ul>
                        <li><a href="http://cran.r-project.org/web/packages/rjson/index.html">rjson</a>.</li>
                        <li><a href="http://cran.r-project.org/web/packages/jsonlite/index.html">jsonlite</a>.</li>
                    </ul>
                </li>
                <li>Racket:
                    <ul>
                        <li><a href="http://www.neilvandyke.org/racket-json-parsing/">json-parsing</a>.</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="col-md-3">
            <ul>
                <li>PHP:
                    <ul>
                        <li><a href="http://www.php.net/releases/5_2_0.php">PHP 5.2</a>.</li>
                    </ul>
                </li>
                <li>PicoLisp:
                    <ul>
                        <li><a href="https://github.com/aw/picolisp-json">picolisp-json</a>.</li>
                    </ul>
                </li>
                <li>Pike:
                    <ul>
                        <li><a href="http://modules.gotpike.org/module_info.html?module_id=33">Public.Parser.JSON</a>.</li>
                        <li><a href="http://modules.gotpike.org/module_info.html?select=0.2&amp;module_id=43">Public.Parser.JSON2</a>.</li>
                    </ul>
                </li>
                <li>PL/SQL:
                    <ul>
                        <li><a href="https://github.com/pljson/pljson">pljson</a>.
                        </li>
                    </ul>
                </li>
                <li>Prolog:
                    <ul>
                        <li><a href="http://www.jekejeke.ch/idatab/doclet/prod/en/docs/05_run/10_docu/05_frequent/07_theories/10_advanced/07_json.html">Jekejeke</a>.
                        </li>
                    </ul>
                </li>
                <li>PureBasic:
                    <ul>
                        <li><a href="http://www.purebasic.com/documentation/json/index.html">JSON</a>.</li>
                    </ul>
                </li>
                <li>Rebol:
                    <ul>
                        <li><a href="http://www.rebol.org/view-script.r?script=json.r">json.r</a>.</li>
                    </ul>
                </li>
                <li>RPG:
                    <ul>
                        <li><a href="http://rpgnextgen.com/index.php?content=json">JSON Utilities</a>.</li>
                    </ul>
                </li>
                <li>Rust:
                    <ul>
                        <li><a href="https://github.com/serde-rs/json">Serde JSON</a>.</li>
                        <li><a href="https://github.com/maciejhirsz/json-rust">json-rust</a>.</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    </section>
    <footer>
        <small>© {new Date().getFullYear()} jsonviewer.dev All rights reserved.</small>
    </footer>
    </React.Fragment>
  );
}

export default App;
