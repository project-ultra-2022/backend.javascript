--table products
CREATE TABLE IF NOT EXISTS public.products
(
    id serial NOT NULL,
    name text NOT NULL,
    id_type_products integer NOT NULL,
    ente_certificates text NOT NULL,
    duration_certification integer NOT NULL,
    duration_product integer NOT NULL,
    status boolean NOT NULL,
    CONSTRAINT products_pkey PRIMARY KEY (id),
    CONSTRAINT id_type_product FOREIGN KEY (id_type_products)
        REFERENCES public.type_products (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
--table type_products
CREATE TABLE IF NOT EXISTS public.type_products
(
    id serial NOT NULL DEFAULT,
    name text NOT NULL,
    CONSTRAINT type_products_pkey PRIMARY KEY (id)
)
