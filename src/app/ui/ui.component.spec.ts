import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Y method', () => {
    // Arrange
    let result = [];
    component.array = '0.0,1.0,2.0,3.0';
    component.a = 2;
    component.b = 1;

    
    // Act
    component.y();
    result = component.Result;

    // Assert
    expect(result).toEqual([1,3,5,7]);
  });

  it('Should set array model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="array"]')).nativeElement;

    // Act 
    inputElement.value = '0.0,1.0,2.0,3.0';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.array).toEqual('0.0,1.0,2.0,3.0'); 
  });

  it('Should set a model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="a"]')).nativeElement;

    // Act 
    inputElement.value = '2';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.a).toEqual(2); 
  });

  it('Should set b model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="b"]')).nativeElement;

    // Act 
    inputElement.value = '1';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.b).toEqual(1); 
  });

 it('should add array, a, b when i click the mean button ', () => {
   // Arrange 
   component.array = '0.0,1.0,2.0,3.0';
   component.a = 2;
   component.b = 1;
   let meanButton = fixture.debugElement.query(By.css('.button'));

   // Act
   meanButton.triggerEventHandler('click', null);

   // Assert
   expect(component.Result).toEqual([1,3,5,7]);

  });

 it('Should render sum in result div', () => {
   // Arrange
   component.array = '0.0,1.0,2.0,3.0';
   component.a = 2;
   component.b = 1;

   // Act
   component.y();
   fixture.detectChanges();
   
   let de = fixture.debugElement.query(By.css('.result'));
   let el : HTMLElement = de.nativeElement;

   // Assert
   expect(el.innerText).toContain('1,3,5,7');
    
 });

});
