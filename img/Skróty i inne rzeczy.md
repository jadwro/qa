<!---
Markdown: Print current document to HTML
-->

# **Skróty i info IT**

**Dokument ma na celu pomóc zrozumieć skróty i pojęcia IT.**\
Dodatkowo poszerzając wiedzę z zakresu poszczególnych projektów (w tym - **NFG**).

---
---
<br>

## Ogólne skróty IT

<br>

**AW** \
Aplikacja wewnętrzna - to co widzą pracownicy firmy NFG

**AK** \
Aplikacja klienta - to co widzi klient  

**CR** \
Change request - klient chce żeby jednak coś co zostało zrobione chce zmienić.  

**SOF** \
System obsługi faktoringu (nasza apka) 

**PM** \
Product manager  

**TL** \
Team Leader

**TFS** \
Azure DevOps, starsza nazwa  

**PR** \
Pull request - prósba developera o akcetpację kodu przez innych. Jeśli jest zaakceptowana, kod jest łaczony z reszta kodu (merge)

**WL** \
White List - spis/rejestr rachunków należących do firm 

**RDO** \
Rejestr Dowodów Osobistych 

**KRD6** \
Aktualne środowisko testowe (03/12/2021), wewnętrzne

**AML** \
*Anti Money Laundering* – praktyki mające na celu przeciwdziałanie praniu pieniędzy i finansowaniu terroryzmu 

**ERP** \
*enterprise resource planning* - określenie systemów informatycznych służących wspomaganiu zarządzania przedsiębiorstwem (zespołem pracowników, zasobami materiałowymi czy też finansami) lub współdziałania grupy współpracujących ze sobą przedsiębiorstw, poprzez gromadzenie danych oraz umożliwienie wykonywania operacji na zebranych danych (via wiki) 

**e2e** \
*end to end tests* – testy automatyczne; w NFG służą do każdorazowego sprawdzania kodu przy deploymencie. 

**XL** \
*Comarch ERP XL* - narzędzie księgowe, które może obsłużyć np.: Split Payment 

**RDP** \
*Remote Desktop Protocol* - narzędzie do zdalnego podłączenia do innego kompa tak by mieć do niego dostęp 

---
---
<br>

## Pojęcia z IT

<br>

**Deployment** \
Przeniesienie zatwierdzonego kodu na inne środowisko (NFG: środowisko testowe). W przypadku NFG - zmienia się wersja programu za każdym razem oraz tracimy środowisko na ok.30 min. 

**Release**  
Wydanie nowej (i przetestowanej) wersji kodu na środowisko produkcyjne. 

**Build** \
Nowa wersja aplikacji powstała po zawarciu wszystkich zmian w kodzie, kompilacji kodu etc. 

**Branch** \
Kopia kodu aplikacji, na której pracuje developer by wprowadzić zmiany do aplikacji. By połaczyć kod z masterem, wykonywany jest pull request. 

**Commit** \
Wrzucenie pojedynczych zmian kodu na danego brancha. 

**Master** \
źródłowa wersja kodu. 

**Task** \
[do wyjaśnienia - w kontekście Azure DevOps] 

**Korab** \
Framework (stworzony przez ITM na potrzeby klienta Skanska), używany do tworzenia innych projektów. Tudzież łódź albo herb. Jak również wieś. 

**Zgłoszenie prod** \
Zgłoszenie pochodzące z produkcji 

**Encja** \
Jednostkowy wpis w tabeli 

**Portal azure.com** \
Azure to chmura udostępniona od Microsofta dla devóv np można w nim postawić system, programować itp. 

---
---
<br>

## Pojęcia z **NFG**:

<br>
 

**młynek spłat** \
Proces uruchamiany za każdym księgowaniem; ustala on wszystkie zobowiązania klienta, sortuje je od najwcześniejszych do najpóźniejszych i potem, jeśli klient ma jakieś środki na KSDW, przekazuje te środki na to co jest jako najwcześniejsze i dalej wg sortowania. 


**data wymagalności raty** \
Data do której należy spłacić ratę.
 

**faktura kosztowa** \
Jeśli została wystawiona na OW, powinna zawierać jedną pozycję, tj. wszystkie zsumowane raty, jeśli OW było spłacane osobnymi kwotami. 

**ręczna zmiana statusu fakturatki** \
Nie rusz, bo nie ruszamy tera. Będzie to przedmiotem zmian w następnym releasie. 

**finansowanie fakturatki** \
To jest proces, w którym NFG płaci za fakturę, którą we wniosku o fakturatkę składa klient. Czyli, jeśli składasz wniosek o fakturatkę za biurko z Ikei, to finansowanie fakturatki to jest kiedy NFG płaci za to biurko za Ciebie na podstawie faktury, którą dla Ciebie wystawiła Ikea (tak to rozumiałem, ale wolałem dopytać). 

**zgłoszenie s.d.** \
Zgłoszenie silnika decyzyjnego.

**zgłoszenie r.b.** \
Zgłoszenie "risk based". 

**Moduł master data** \
Moduł który tworzy wzorcowe dane klienta, które potem mogą być aktualizowane.Bas