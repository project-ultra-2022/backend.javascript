CREATE TABLE public.lessons
(
    id serial NOT NULL,
    id_product integer NOT NULL,
    name text NOT NULL,
    url_media text NOT NULL,
    description text NOT NULL,
    date date NOT NULL,
    update_date date NOT NULL,
    status boolean NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_product)
        REFERENCES public.products (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);x