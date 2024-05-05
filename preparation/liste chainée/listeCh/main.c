#include <stdio.h>
#include <stdlib.h>
#include <string.h>


typedef struct etudiant{
    int id;
    char nom[10];
}etudiant;

typedef struct Node{
    etudiant data;
    struct Node *next;
}Node;

Node* ajouterFin(Node *tete, int id, char *nom){
    Node *node = malloc(sizeof(Node));
    node->data.id = id;
    strcpy(node->data.nom, nom);
    node->next = NULL;

    if(tete == NULL){
        tete = node;
        }else{
        Node *temp = tete;
        while(temp->next != NULL){
            temp = temp->next;
        }
        temp->next = node;
    }
    return tete;
}

Node* ajouterDebut(Node *tete){
    Node *node = malloc(sizeof(Node));
    node->data.id = 2;
    strcpy(node->data.nom, "Fatima");
    node->next = NULL;
    if(tete == NULL){
        tete = node;
    }else{
        node->next = tete;
        tete = node;
    }
    return tete;
}

Node* ajouterMillieu(Node *tete, int id){
    if(tete == NULL){
        return;
    }
    Node *temp = tete;
    while(temp!=NULL){

        if(temp->data.id == id){
            break;
        }

        temp = temp->next;
    }
    if(temp!=NULL){
        Node *node = malloc(sizeof(Node));
        node->data.id = temp->data.id + 1;
        strcpy(node->data.nom, "Hasnae");
        node->next = temp->next;
        temp->next = node;
    }else{
        printf("ID not found!");
    }
    return tete;
}


void afficher(Node *tete){
    if(tete == NULL){
        return;
    }
    Node *temp = tete;
    while(temp != NULL){
        printf("id: %d    nom: %s  \n", temp->data.id, temp->data.nom);
        temp = temp->next;
    }
}

int somme(int n){
    if(n==0 ||n==1)
        return n;
    return n+somme(n-1);
}

int puissance(int x, int n){
    if(n==0)return 1;
    return x*puissance(x,n-1);
}

int main()
{
    /*Node *tete = NULL;
    int id;
    char nom[10];
    char isA = 'y';

    do{
        printf("\nID: ");
        scanf("%d", &id);
        printf("\nNom: ");
        scanf("%s", nom);
        tete = ajouterFin(tete, id, nom);

        printf("Want to add more ? (y/n)");
        isA = getch();

    }while(isA == 'y');


    afficher(tete);*/

    int n;
    printf("saisir un nombre: ");
    scanf("%d", &n);
    printf("La somme de suite de nombre de 1 a %d est: %d", n, puissance(2,2));


    return 0;
}
