import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges,DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
     @Input('srvElement') element : { type: string, name: string, content: string};
     @Input() name:string;
     @ViewChild('heading', {static:true} ) header:ElementRef;
     @ContentChild('contentparagraph', {static:true}) paragraph:ElementRef;
  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnchanges Called');
    console.log('changes');
  }

  ngOnInit() {
      console.log('ngOnInit called');
      console.log('Text Content' +this.header.nativeElement.textContent);
      console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(){
    console.log('ngDoCheck Called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }
  ngAfterContentInit(){
    console.log('ngAfteContentInit');
    console.log('Text Content:' +this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph:' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContenChecked');
    console.log('Text Content:' + this.header.nativeElement.textContent);

  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    console.log( 'Text Content:' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}

