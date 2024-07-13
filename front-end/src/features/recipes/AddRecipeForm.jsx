import useAddRecipe from "./useAddRecipe";
import useFilters from "../search/useFilters";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { device } from "../../styles/optionStyles";
import {
  StyledButton,
  StyledFormRow,
  StyledFlexBox,
  StyledUploader,
} from "../../styles/StyledComponents";
import { useState } from "react";
import Loader from "../../layouts/Loader";

const StyledFormPage = styled.div`
  padding-inline: 15%;
  padding-block: 1rem;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow-x: hidden;
  @media (max-width: ${device.md}) {
    padding-inline: 10%;
  }
  @media (max-width: ${device.sm}) {
    padding-inline: 1%;
  }
`;

const StyledForm = styled.form`
  padding: 1em;
  width: 80%;
  display: flex;
  flex-flow: column;
  border: var(--color-yellow-300) solid 2px;
  border-radius: 15px;
  background-color: var(--color-yellow-100);
`;

const StyledSelectBox = styled(StyledFlexBox)`
  @media (max-width: ${device.md}) {
    flex-flow: column;
    gap: 0em;
  }
`;

const StyledAddFormRow = styled(StyledFormRow)`
  gap: 0.5em;
`;

const StyledFormError = styled.span`
  font-size: 0.8em;
  color: var(--color-red-600);
  opacity: 0;
  &::before {
    content: "*"; //invisible content to align select elements
    opacity: 0;
  }
  ${(props) =>
    props.$required &&
    css`
      opacity: 1;
    `}
`;

const StyledInput = styled.input`
  padding: 0.3em 0.5em;
  width: 100%;
  border: var(--color-orange-100) solid 2px;
  border-radius: 15px;
  &:focus {
    outline: none;
    border: var(--color-orange-500) solid 2px;
  }
`;

const StyledFormButton = styled(StyledButton)`
  border: var(--color-orange-100) 2px solid;
  background-color: var(--color-orange-300);
  align-self: center;
`;

export default function AddRecipeForm() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [filename, setFilename] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      ingredients: "",
      instructions: "",
      cuisineId: "",
      dietId: "",
      difficultyId: "",
      image: null,
    },
    mode: "onBlur",
  });

  const { cuisines, diets, difficulties, isPending: isLoading } = useFilters();
  const { mutate: handleAddRecipe, isPending } = useAddRecipe();

  function handleUpload(file) {
    if (file) {
      setFilename(file.name);
      const reader = new FileReader();
      reader.onload = function (e) {
        setIsUploaded(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function onSubmit(data) {
    const formData = new FormData();
    for (let props in data) {
      formData.append(props, data[props]);
    }
    formData.set("image", data.image[0]);

    handleAddRecipe(formData, {
      onSuccess: (data) => {
        reset();
        setIsUploaded(false);
        setFilename("");
        console.log(data);
      },
    });
  }

  if (isLoading) return <Loader />;

  return (
    <StyledFormPage>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <StyledFlexBox $direction="column">
          <StyledAddFormRow>
            <label htmlFor="name">Recipe Name</label>
            <StyledInput
              name="name"
              type="text"
              id="name"
              {...register("name", {
                required: "*Recipe name is required",
                disabled: isPending,
              })}
            />
            <StyledFormError $required={errors?.name?.message}>
              {errors?.name && errors?.name?.message}
            </StyledFormError>
          </StyledAddFormRow>
          <StyledAddFormRow>
            <label htmlFor="ingredients">Ingredients</label>
            <StyledInput
              as="textarea"
              name="ingredients"
              id="ingredients"
              {...register("ingredients", {
                required: "*Ingredients list is equired",
                disabled: isPending,
              })}
            ></StyledInput>
            <StyledFormError $required={errors?.name?.message}>
              {errors?.ingredients && errors?.ingredients?.message}
            </StyledFormError>
          </StyledAddFormRow>
          <StyledAddFormRow>
            <label htmlFor="instructions">Instructions</label>
            <StyledInput
              as="textarea"
              name="instructions"
              id="instructions"
              {...register("instructions", {
                required: "*Instructions are required",
                disabled: isPending,
              })}
            />
            <StyledFormError $required={errors?.name?.message}>
              {errors?.instructions && errors?.instructions?.message}
            </StyledFormError>
          </StyledAddFormRow>
        </StyledFlexBox>
        <StyledFlexBox $direction="column">
          <StyledSelectBox>
            <StyledAddFormRow>
              <label htmlFor="cuisineId">Cuisine</label>
              <StyledInput
                as="select"
                name="cuisineId"
                id="cuisineId"
                {...register("cuisineId", {
                  required: "*Required",
                  disabled: isPending,
                })}
              >
                {cuisines.map((cuisine) => (
                  <option value={cuisine.id} key={cuisine.id}>
                    {cuisine.name}
                  </option>
                ))}
              </StyledInput>
              <StyledFormError $required={errors?.name?.message}>
                {errors?.cuisineId && errors?.cuisineId?.message}
              </StyledFormError>
            </StyledAddFormRow>
            <StyledAddFormRow>
              <label htmlFor="dietId">Diet</label>
              <StyledInput
                as="select"
                name="dietId"
                id="dietId"
                {...register("dietId", {
                  required: "*Required",
                  disabled: isPending,
                })}
              >
                {diets.map((diet) => (
                  <option value={diet.id} key={diet.id}>
                    {diet.name}
                  </option>
                ))}
              </StyledInput>
              <StyledFormError $required={errors?.name?.message}>
                {errors?.dietId && errors?.dietId?.message}
              </StyledFormError>
            </StyledAddFormRow>
            <StyledAddFormRow>
              <label htmlFor="difficultyId">Difficulty</label>
              <StyledInput
                as="select"
                name="difficultyId"
                id="difficultyId"
                {...register("difficultyId", {
                  required: "*Required",
                  disabled: isPending,
                })}
              >
                {difficulties.map((difficulty) => (
                  <option value={difficulty.id} key={difficulty.id}>
                    {difficulty.name}
                  </option>
                ))}
              </StyledInput>
              <StyledFormError $required={errors?.name?.message}>
                {errors?.difficultyId && errors?.difficultyId?.message}
              </StyledFormError>
            </StyledAddFormRow>
          </StyledSelectBox>
          <StyledAddFormRow>
            <label htmlFor="image">
              {isUploaded ? `Image chosen: ${filename}` : "Upload a image"}
            </label>
            <StyledUploader $upload={isUploaded}>
              <input
                type="file"
                name="image"
                id="image"
                {...register("image", {
                  required: "*Required",
                  disabled: isPending,
                })}
                onChange={async (e) => handleUpload(e.target.files[0])}
              />
            </StyledUploader>
            <StyledFormError $required={errors?.name?.message}>
              {errors?.image && errors?.image?.message}
            </StyledFormError>
          </StyledAddFormRow>
          <StyledFormButton disabled={isPending}>
            {isPending ? "Submitting" : "Submit"}
          </StyledFormButton>
        </StyledFlexBox>
      </StyledForm>
    </StyledFormPage>
  );
}
