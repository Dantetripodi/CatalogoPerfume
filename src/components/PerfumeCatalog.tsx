"use client";

import { useState } from "react";
import  Image from "next/image";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Slider } from "@/ui/slider";
import { Label } from "@/ui/label"; 
import { RadioGroup, RadioGroupItem } from "@/ui/radio-group";

// Datos para los perfumes
const perfumes = [
  {
    id: 1,
    name: "212-Men",
    brand: "Carolina Herrera",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/212-men-hombres.jpg",
    notes: "Eau de Toilette",
  },
  {
    id: 2,
    name: "212-Vip Black",
    brand: "Carolina Herrera",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/212-vip Black-hombres.jpg",
  },
  {
    id: 3,
    name: "212-Vip Men Club",
    brand: "Carolina Herrera",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/212-vipNighClub-hombres.jpg",
  },
  {
    id: 4,
    name: "Acqua Di Gio",
    brand: "Giorgio Armani",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/Acquadi-men-hombres.jpg",
  },
  {
    id: 5,
    name: "Amor Amor Cacharel",
    brand: "Jean Bousquet",
    gender: "mujer",
    price: 30000,
    image: "/imagenes/AmorAmor-women-mujeres.jpg",
  },
  {
    id: 6,
    name: "Armani Code",
    brand: "Giorgio Armani",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/ArmaniCode-hombres.jpg",
  },
  {
    id: 7,
    name: "Bad Boy Cobalt",
    brand: "Carolina Herrera",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/badboy-Covalt-hombres.jpg",
  },
  {
    id: 8,
    name: "Bad Boy",
    brand: "Carolina Herrera",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/badboy-hombres.jpg",
  },
  {
    id: 9,
    name: "Black XS L'Aphrodisiaque",
    brand: "Paco Rabanne ",
    gender: "hombre",
    price:  30000,
    image: "/imagenes/blackXS-afro-hombres.jpg",
  },
  {
    id: 10,
    name: "CH Women",
    brand: "Carolina Herrera",
    gender: "mujer",
    price: 30000,
    image: "/imagenes/Ch-women-mujeres.jpg",
  },
  {
    id: 11,
    name: "Eve EDP",
    brand: "Paco Rabanne",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/EveParfum-hombres.jpg",
  },
  {
    id: 12,
    name: "Givenchy-Very Irresistible Sensual",
    brand: "Givenchy",
    gender: "mujer",
    price: 30000,
    image: "/imagenes/Givenchy-women-mujeres.jpg",
  },
  {
    id: 13,
    name: "Good Girl",
    brand: "Carolina Herrera",
    gender: "mujer",
    price: 30000,
    image: "/imagenes/Good-Girl-women-mujeres.jpg",
  },
  {
    id: 14,
    name: "Halloween women",
    brand: "Jesús del Pozo",
    gender: "mujer",
    price: 30000,
    image: "/imagenes/Halloween-women-mujeres.jpg",
  },
  {
    id: 15,
    name: "Hugo Boss Just Diferent",
    brand: "Hugo Boss",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/HugoBoss-hombres.jpg",
  },
  {
    id: 16,
    name: "L'Interdit",
    brand: "Givenchy",
    gender: "mujer",
    price: 30000,
    image: "/imagenes/L-interdit-women-mujeres.jpg",
  },
  {
    id: 17,
    name: "La Vida Es Bella",
    brand: "Lancôme",
    gender: "mujer",
    price: 30000,
    image: "/imagenes/LaVidaEsBella-women-mujeres.jpg",
  },
  {
    id: 18,
    name: "My way",
    brand: "Giorgio Armani",
    gender: "mujer",
    price: 30000,
    image: "/imagenes/My-way-women-mujeres.jpg",
  },
  {
    id: 19,
    name: "Nina Ricci",
    brand: "Nina Ricci",
    gender: "mujer",
    price: 30000,
    image: "/imagenes/NinaRicci-women-mujeres.jpg",
  },
  {
    id: 20,
    name: "Phantom Black Parfum",
    brand: "Paco Rabanne",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/Phantom-black-hombres.jpg",
  },
  {
    id: 21,
    name: "Phantom",
    brand: "Paco Rabanne",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/Phantom-hombres.jpg",
  },
  {
    id: 22,
    name: "Polo Blue EDT",
    brand: "Ralph Lauren",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/poloBlue-hombres.jpg",
  },
  {
    id: 23,
    name: "Sauvage Dior",
    brand: "Dior",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/Sauvage-men-hombres.jpg",
  },
  {
    id: 24,
    name: "Scandal Pour Homme",
    brand: "Jean Paul Gaultier",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/Scandal-men-hombres.jpg",
  },
  {
    id: 25,
    name: "Tom Ford - Oud Wood",
    brand: "tom ford",
    gender: "hombre",
    price: 30000,
    image: "/imagenes/Tomford-hombres.jpg",
  },
];

export default function PerfumeCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("todos");
  const [priceRange, setPriceRange] = useState([0, 30000]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const filteredPerfumes = perfumes.filter((perfume) => {
    const matchesSearch =
      perfume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      perfume.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender =
      genderFilter === "todos" || perfume.gender === genderFilter;
    const matchesPrice =
      perfume.price >= priceRange[0] && perfume.price <= priceRange[1];
    return matchesSearch && matchesGender && matchesPrice;
  });
  const handleGenderChange = (value : string) => {
    setGenderFilter(value);
  };

  return (
    <div className="mx-auto p-5 h-full flex flex-col">
      <h1 className="text-4xl font-bold mb-7">Catálogo de Perfumes</h1>

      <div className="mb-6 space-y-4">
        <Input
          type="text"
          placeholder="Buscar perfumes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />

        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[100px]">
            {/* <Label className="mb-2 block">Género</Label> */}
            <RadioGroup  value={genderFilter} onValueChange={setGenderFilter}>
              <div className="flex items-center space-x-2 pt-2 ">
                <RadioGroupItem value="todos" id="todos" className="w-6 h-6" />
                <Button  variant="outline" type="button"onClick={() => handleGenderChange("todos")}>
                TODOS
                </Button>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="hombre" id="hombre" className="w-6 h-6" />
                <Button variant="outline" type="button"onClick={() => handleGenderChange("hombre")}>
                HOMBRES
                </Button>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="mujer" id="mujer" className="w-6 h-6"/>
                <Button variant="outline" type="button"onClick={() => handleGenderChange("mujer")}>
                MUJER
                </Button>
              </div>
            </RadioGroup>
          </div>

          <div className="flex-1 min-w-[200px]">
            <Label className="mb-2 block">Rango de Precio</Label>
            <Slider
              min={0}
              max={30000}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div> 




        </div>
      </div>

      <div
        className="flex flex-shrink w-full"
        style={{ gap: "10px", flexWrap: "wrap" }}
      >
        {filteredPerfumes.map((perfume) => (
          <Card
            key={perfume.id}
            // className="flex-1 flex flex-col"
            style={{
              flex: "1",
              minWidth: "250px",
              maxWidth: "300px",
            }}
          >
            <CardHeader>
              <Image
                src={perfume.image}
                alt={`Imagen de ${perfume.name}`}
                width={200}
                height={200}
                className="w-full h-50 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-bold">{perfume.name}</CardTitle>
              <p className="text-sm text-gray-600 pt-2">{perfume.brand}</p>
              <p className="text-sm text-gray-600 capitalize pt-2">
                {perfume.gender}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="">${perfume.price}</span>
              
              <Button
              className="btn btn-primary"
              onClick={openModal}>
              Ver Detalles
              </Button>
              {/* MODAL */}
                {isModalOpen && (
                      <div className="modal-overlay fixed inset-0 bg-opacity-50 bg-opacity-50 flex items-center justify-center z-50">
                      <div className="modal bg-white rounded-lg p-6 shadow-lg max-w-md w-full text-center">
                        <h2>{perfume.name}</h2>
                        <p><strong>Notas:</strong> {perfume.notes??"Sin notas"}</p>
                        <Button
                          className="btn btn-secondary"
                          onClick={closeModal}
                        >
                        Cerrar
                        </Button>
                        </div>
                      </div>
                    )}
          </CardFooter>
          </Card>
        ))}
      </div>

      {filteredPerfumes.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No se encontraron perfumes que coincidan con tu búsqueda.
        </p>
      )}
    </div>
  );
}
