import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TotoService } from '../services/TotoService';

import { MockTotoService } from '../services/mocks/MockTotoService';

describe('TestComponent', () => {
  let component: TestComponent;
  let totoService: TotoService;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      providers: [
        { provide: TotoService, useClass: MockTotoService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    totoService = TestBed.get(TotoService);
    component.totoService = totoService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test the toto function', () => {
    const expected = "Toto";
    expect(component.toto()).toEqual(expected);
  });

  it('test the vrai function', () => {
    expect(component.vrai()).toBeTruthy();
  });

  it('test the faux function', () => {
    expect(component.faux()).toBeFalsy();
  });

  it('test the bidon function', () => {
    expect(component.bidon()).toBeTruthy();
  });

  it('test the callTotoService function', () => {
    component.ngOnInit();
    expect(component.callTotoService()).toEqual('toto mock');
  });
});
