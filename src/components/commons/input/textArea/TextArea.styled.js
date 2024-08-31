import { Generators } from "../../../../styles/generator";
import styled from "styled-components";

export const TextAreaWrapper = styled.section`
  position: relative;
  width: 28rem;
`;

export const TextAreaInput = styled.textarea`
  ${Generators.flexGenerator("row", "center", "center")}
  width: 100%;
  height: 17rem;
  padding: 1.8rem 1.2rem;

  color: ${({ theme }) => theme.colors.gray_0};

  background: ${({ theme }) => theme.colors.gray_800};
  outline: none;
  border: 1px solid transparent;
  border-radius: 0.6rem;

  resize: none;

  ${({ theme }) => theme.fonts.body2_long};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_600};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray_0};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TextCap = styled.p`
  ${Generators.flexGenerator("row", "center", "end")}

  width: 100%;
  margin: 0;
  margin-top: 0.6rem;

  color: ${({ theme }) => theme.colors.gray_500};
  text-align: right;
  ${({ theme }) => theme.fonts.body2_normal_medi};
`;