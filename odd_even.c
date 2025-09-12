#include<stdio.h>

void main()
{
    int a;

    printf("ENTER NUMBER:");
    scanf("%d", &a);

    if (a%2==0)
    {
        printf("it\'s even");
    }
    else{
        printf("it\'s odd");
    }
    
}