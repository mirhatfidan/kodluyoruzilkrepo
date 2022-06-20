>[Ödev Linki](https://app.patika.dev/courses/veri-yapilari-ve-algoritmalar/merge-sort-proje)



# Proje 2
[16,21,11,8,12,22] -> Merge Sort

1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

>Cevap-1 :  

|Steps|Divided & Merged Schema|
|:--:|:--:|
| Start   |[16,21,11,8,12,22]|
| Divide1 |[16,21,11] - [8,12,22]|
| Divide2 |[16] - [21,11] - [8] - [12,22]|
| Divide3 |[16] - [21] - [11] - [8] - [12] - [22]|
| Merge1  |[16] - [21,11] - [8] - [12,22]|
| Merge2  |[11,16,21] - [8,12,22]|
| Merge3  |[8,11,12,16,21,22]|

2. Big-O gösterimini yazınız.

>Cevap-2 : O(nlogn) = O(6log6)